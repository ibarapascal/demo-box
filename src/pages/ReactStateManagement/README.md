# React State Management

## Getting Started

### State management and data-flow thoughts

[docs#redux-motivation](https://redux.js.org/introduction/motivation)

>If you lost control over the when, why, and how of its state, then the system is opaque and non-deterministic, and it's hard to reproduce bugs or add new features.

### React.Context, Redux, Recoil

1.[docs#context](https://reactjs.org/docs/context.html)

>Context provides a way to pass data through the component tree without having to pass props down manually at every level.

<details>
  <summary style='outline:none;'>Code: minimum sample</summary>

- index

```tsx
interface YourContextInterface {
  id?: string;
  value?: string;
}

const YourContext = React.createContext<YourContextInterface>({});

const Component = () => (
  <YourContext.Provider value={{id: 'UUID', value: 'value'}}>
    <YourComponent />
  </YourContext.Provider>
)

const YourComponent = () => {
  const contextValue = React.useContext(YourContext);
  return (
    <div>
      <p>{contextValue.id}</p>
    </div>
  )
}
```

</details>

2.[docs#redux](https://redux.js.org/introduction/getting-started)

>Redux is a predictable state container for JavaScript apps.

>Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen.

<details>
  <summary style='outline:none;'>Code: minimum sample</summary>

- index

```tsx
import {
  Provider,
  useDispatch,
  useSelector
} from 'react-redux';
import {
  applyMiddleware,
  createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Store } from './interface/redux/Store';
import { reducer } from './reducer';

const preloadStore = {};
const store = createStore(
  reducer,
  preloadStore,
  composeWithDevTools(applyMiddleware(thunk)),
);

const Component = () => (
  <Provider store={store}>
    <YourComponent />
  </Provider>
)

const YourComponent = () => {
  const errorMessage = useSelector((store: Store) => store.errorMessage);
  const dispatch = useDispatch();
  const onClearErrorMessage = () => {
    dispatch({
      type: 'catchErrorMessage',
      payload: {},
    });
  };
  return (
    <div>
      {errorMessage}
    </div>
  )
}
```

- ./reducer

```tsx
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { ErrorMessage } from './interface/model/Common';

export const errorMessageReducer = createReducer<{}>(
  {},
  {
    catchErrorMessage(state, action: { payload: ErrorMessage }) {
      return action.payload;
    },
  },
);

export const reducer = combineReducers({
  // ...
  errorMessage: errorMessageReducer,
});
```

- ./interface/redux/Store

```tsx
import { ErrorMessage } from '../model/Common';

export interface Store {
  // ...
  errorMessage: ErrorMessage;
}
```

</details>

3.[docs#recoil](https://recoiljs.org/docs/introduction/motivation)

>Recoil defines a directed graph orthogonal to but also intrinsic and attached to your React tree. State changes flow from the roots of this graph (which we call atoms) through pure functions (which we call selectors) and into components.

- etc.

### Comparison and use cases

It seems that there are multiple solutions for react components' data source/update, in real-world project we often use below methods.

`React.context` could provide its child components an immutable single source of truth as well as mutable in itself.

`Constants` imported could be used everywhere with their read-only data.

`Redux` and other state management tools would offer some cross-component solutions for amounts of data changing, single source of truth, asynchronicity, and so on.

<img width="1022" alt="スクリーンショット 2020-08-07 15 30 23" src="https://user-images.githubusercontent.com/30466424/89616252-03ab4600-d8c3-11ea-8266-2e8d16cc7f7c.png">

>*Notice that this chart only aims to show the independent usage, there is no specific imply with the relationship between each of them. It would be discussed in the following part.*

Based on our practice, we can always use `Constants` with the proper structure to distribute read-only data directly.

Inside component scope, for simple components with reasonable design, we can use limited event callbacks and props directly to fit our demands. For complex components with multiple callbacks that need to expose, we can use `React.Context` to lift up the related stuff -- not only the state but also callbacks.

Once we exposed necessary functions for each component scope, we can arrange them with their related state update methods or API requirements using `Redux`, maybe crossing the whole tree structure, or targeting multiple components.

## Classical component case

### HOC

- [docs#higher-order-components](https://reactjs.org/docs/higher-order-components.html)

### Redux: Container - View

We usally use `connect` HOC to provide view(presentational) component the needed `redux state` and `redux actions` which need to dispatch via **props**.

```tsx
import { connect } from 'react-redux';

class YourComponent extends React.Component<Props, State>{...}

export const Component = withTheme(withStyles(styles)(connect(
  (store: Store) => ({
    // mapStateToProps
    errorMessage: store.errorMessage,
  }),
  (dispatch: any) => ({
    // mapDispatchToProps
    storeErrorMessage: (payload: any) => dispatch(
      actions.storeErrorMessage(payload)
    ),
  })
)(YourComponent)));
```

We may want to separate the HOC to a dependent file(component) named `container` which handles the component's redux props with their methods.

- [docs#redux-presentational-and-container-components](https://redux.js.org/basics/usage-with-react#presentational-and-container-components)

In that case, we could potentially reuse only `view` or `container` component.

### Redux: Actions - ActionsWithService

Based on one of the best practices for react-redux.

- [microsoft/frontend-bootcamp](https://github.com/microsoft/frontend-bootcamp) **/** [demo:service-call](https://github.com/microsoft/frontend-bootcamp/tree/master/bonus-servicecalls/demo)

We could separate the redux actions into two major parts: `actions` and `actionsWithServices`, in case of complex component structure and design which require almost all the response data been stored into redux storage to use.

```tsx
import * as service from '../../api';
import { catchDispatch } from '../../services/RequestService';
import { Store } from '../../store';

export const actions = {
  receiveBoom: (payload: any) => ({ type: 'receiveBoom', payload }),
  receivePoop: (payload: any) => ({ type: 'receivePoop', payload }),
};

export const actionsWithService = {
  getBoom: () => {
    // dispatch with error boundary
    return catchDispatch(
      // request params
      {},
      // request API
      service.getBoom,
      // receieve actions
      actions.receiveBoom,
    );
  },
  getPoop: () => {
    // simple mode
    return async (dispatch: any, getState: () => Store) => {
      const result = await service.getPoop();
      dispatch(actions.receivePoop(result));
    };
  },
};
```

<details>
  <summary style='outline:none;'>Code: sample of catchDispatch</summary>

- ../../services/RequestService

```tsx
import { InputAction } from '../interface/model/InputAction';

export const catchDispatch = (
  params: any,
  service: any,
  serviceAction: any,
) => {
  const action = {
    catchErrorMessage: (payload: InputAction) => ({
      type: 'catchErrorMessage',
      payload,
    }),
  };
  return async (dispatch: any) => {
    try {
      dispatch(serviceAction(await service(params)));
    } catch (error) {
      dispatch(action.catchErrorMessage(JSON.parse(error.message)));
    }
  };
};
```

</details>

### Classical structure

Based on the above knowledge, we could come up with the structure of the classical component with redux as below.

<img width="1022" alt="スクリーンショット 2020-08-07 18 16 20" src="https://user-images.githubusercontent.com/30466424/89630311-25fc8e00-d8da-11ea-8a2b-50faf36bbde5.png">

Following the domain-style file structure, all the related redux methods are tightly bound with the view component, which fits the prompt: `Always keep the related things as close as possible.` And it's easy to implement as a set of templates for developers and leads a quick understanding of API-component relationship.

The cons come to the reuse of redux actions and the nested component state updating. Since all the components are built with those templates, they share **the same standing separately in the view of redux**, even they are nested in the tree structure.

This would lead us to a result that as long as the state with logic becomes more and more complex, we could easily lose control of the component which has multiple actions that are launched in components' lifecycles. And it's hard to tell by itself how a local action updates its component's parent and child.

- [docs#state-and-lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [react-lifecycle-methods-diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Functional component case

### Hooks

Hooks provide a functional solution to reuse code with logic inside components.

- [docs#hooks-motivation](https://reactjs.org/docs/hooks-intro.html#motivation)

### Smaller components

>Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data).

### Redux: useDispatch, useSelector

>keeping components unaware of Redux

- [docs#redux-hooks](https://react-redux.js.org/api/hooks)

As long as we use redux hooks to acquire/store data in the redux storage, it would not be passed from component props but directly inserted inside the component or the `useEffect` hooks. And it's also a benefit for smaller components which need more operations on props.

Since we can customize our redux hooks by building our own hooks with business demands, they could also be reused and exported as one-line solutions for the view components.

### Functional structure

Facing the same logic and APIs, and more components that have a smaller size compared to the classical components, if we insert the hooks in wherever we want without any design patterns, it would cost a lot and share no big difference as before.

<img width="1022" alt="スクリーンショット 2020-08-07 13 27 11" src="https://user-images.githubusercontent.com/30466424/89609322-78c24f80-d8b2-11ea-874f-f02be7c1d79c.png">

Basically we can distribute the components based on:

- 1.The natural distribution of page layout (DOM, styles).
- 2.Component reuse unit (component scope).
- 3.Layout re-rendering unit (props).
- 4.Pages entrance distribution (APIs, data-flow).

One ideal situation is, starting with No.1 and No.2, we could build pure view components that having all necessary callbacks been exposed with standardized APIs like third-party OSS packages, without redux related hooks inside. In this way, we could reduce the complexity of a large amount of components management during implementation, which fits the thought of component unit development using tools like [storybook](https://storybook.js.org/docs/basics/introduction/).

Hooks inside components execute sequentially, and we could also use react hooks like `useEffect` and `useCallback` to restrict and define their actions. A good design of file/component structure based on the above analysis would be capable to provide a clear implement position for outer hooks that related to data-flow.
