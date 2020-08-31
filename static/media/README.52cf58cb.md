# React Component Callback

## Getting Started

### React single-way data binding, water-fall props transport  

As everyone knows, react use single-way data binding. The props been passed from parent components to child are immutable in the child, and the update of props lead to child re-rendering.

It's quite straight forward since the association of the components is a tree structure, just the same as the DOM, and the single-way data binding acts as a water-fall props transportation. Initialing the local state using parent's props seems not the best practice and contradicts the design principle, which also leads us to a better understanding of itself that props as backbone/trunk and state as local leaves.

### Component tree structure, analysis scope, root  

Same as the concept of [HOC(high-order-components)](https://reactjs.org/docs/higher-order-components.html#use-hocs-for-cross-cutting-concerns), the component we build would probably be complex and nested as demand.

```tsx
const Parent = () => (
  <>
    <SomeOtherComponent />
    <Child />
  </>
)
const Child = () => (
  {list.map(x => (
    <GrandChild />
  ))}
)
const GrandChild = () => (
  <>
    Some content
  </>
)
```

Since all the elements(except the root) in a tree share the same standing, the method we analyze them is only a chosen scope of it. The inner logic could be convergence and divergence in different places, and we usually separate components based on it as well as the design demand, but it would beyond the scope of this content. All I want to mention is that the analysis of one component with its child components we would discuss later, is also suitable for the child itself.

<img width="581" alt="スクリーンショット 2020-08-03 10 26 33" src="https://user-images.githubusercontent.com/30466424/89137666-d5043700-d573-11ea-903a-d75b1ad74dc4.png">

Every tree has a root. With [react-router-dom](https://reactrouter.com/web/guides/quick-start), it could be multiple and divided into pages. For packages, it could be the top-level APIs exposed to the user.

### Controlled, uncontrolled components, callback, expose  

Uncontrolled components (the dotted line). [docs#uncontrolled-components](https://reactjs.org/docs/uncontrolled-components.html)

>Where data is handled by the DOM itself.

>With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a `defaultValue` attribute instead of `value`.

<img width="443" alt="スクリーンショット 2020-08-03 10 27 51" src="https://user-images.githubusercontent.com/30466424/89137753-27455800-d574-11ea-996a-7a16beab360b.png">

Controlled components. [docs#controlled-components](https://reactjs.org/docs/forms.html#controlled-components)

<img width="634" alt="スクリーンショット 2020-08-03 10 27 30" src="https://user-images.githubusercontent.com/30466424/89137752-24e2fe00-d574-11ea-9156-b8c65b427dfb.png">

We use event callback exposed by child, and outer methods to update props been passed to child inside the parent to achieve data update under single-way data binding in React.

As long as we use `value` and `callback` rather than `defaultValue` with its inner logic, we are talking about `controlled components`.

## Content

### callback, multiple callback

The real-world example of components often meets multiple functions or UX events which have a callback. There are two major ways to handle it.

First, expose all the callbacks with necessary params and let the user of the component decides how to update the props data.

<img width="521" alt="スクリーンショット 2020-08-03 10 28 03" src="https://user-images.githubusercontent.com/30466424/89137764-30cec000-d574-11ea-8ed9-b66d15a422f9.png">

Use case sample

```tsx
const Component = () => {
  // ...
  const onClickAddColumn = params => {
    const newData = [...data, {...params, id: ...}]
    setData(newData);
  }
  const onClickRemoveRow = params => {
    const newData = [...data].filter(x => params.id === ...);
    setData(newData);
  }
  return (
      <YourComponent
        data={data}
        onClickAddColumn={onClickAddColumn}
        onClickRemoveRow={onClickRemoveRow}
        // ...
      />
    )
  }
)
```

<iframe src="https://codesandbox.io/embed/react-callback-demo2-b44xg?fontsize=14&hidenavigation=1&theme=light"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="react-callback-demo2"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Another way is only to expose callback with its params the updated props data, which means the data update logic would be implemented inside the component we built.

<img width="521" alt="スクリーンショット 2020-08-03 10 28 13" src="https://user-images.githubusercontent.com/30466424/89137766-34624700-d574-11ea-8069-1276e753178c.png">

Use case sample

```tsx
const Component = () => {
  // ...
  const onEvent = newData => {
    setData(newData);
  }
  return (
      <YourComponent
        data={data}
        onEvent={onEvent}
      />
    )
  }
)
```

<iframe src="https://codesandbox.io/embed/react-callback-demo3-ddpv0?fontsize=14&hidenavigation=1&theme=light"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="react-callback-demo3"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Basically it depends, based on the design demand or the functions of the component, there are different approaches. The scalability and the position of the component inside the tree would also be put into consideration.

### Nested callback transport  

Along with the component goes more and more complex, the scope of our component may include nested components with multiple levels and complex props/callbacks. Although there are solutions like `spread syntax` in js and its usage in React [docs#spread-attributes](https://reactjs.org/docs/jsx-in-depth.html#spread-attributes), it's still quite inconvenient in some situations like multiple child components with props and their own child.

<img width="598" alt="スクリーンショット 2020-08-03 10 28 23" src="https://user-images.githubusercontent.com/30466424/89137777-3c21eb80-d574-11ea-93d6-49cfc194bce1.png">

```tsx
const Parent = parentProps => {
  // It's not allowed to use two or more `...` here for multiple child components.
  const {p1, p2, ...childProps} = parentProps;
  return (
    <>
      <SomeOtherComponent />
      <ChildOne {...childProps} cp1={...}/>
      <ChildTwo {...}/>
    </>
  )
}
```

And it's not appropriate because for callbacks we barely touch them except in the place of their native event. We want some methods that could handle the direct `goto` for our callbacks.

### lifting-up, context

Lifting-up callbacks. [docs#lifting-state-up](https://reactjs.org/docs/lifting-state-up.html)

>Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

To orgnize components code by design as demand, based on the natural convergence of component's body as well as their relationship, we can lift up not only the common state but also callbacks that from different child components in multiple places and levels, by using `React.context` [docs#context](https://reactjs.org/docs/context.html)  

<img width="598" alt="スクリーンショット 2020-08-03 10 28 32" src="https://user-images.githubusercontent.com/30466424/89137787-417f3600-d574-11ea-9d46-e3f8fd56d05c.png">

<iframe src="https://codesandbox.io/embed/react-callback-demo5-t8090?fontsize=14&hidenavigation=1&theme=light"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="react-callback-demo5"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

The nesting analysis scope won't bother since we can nesting the local provider in the tree(subtree). [docs#contextprovider](https://reactjs.org/docs/context.html#contextprovider)

>Providers can be nested to override values deeper within the tree.

### Summary

<img width="906" alt="スクリーンショット 2020-08-03 10 28 44" src="https://user-images.githubusercontent.com/30466424/89137793-47751700-d574-11ea-90e4-69e2067ca93f.png">

For complex components design, we could:

- only expose needed callback method/logic corresponding to design demand like `redux actions` or `APIs documentation` based on real implementation requests.

- use `React.context` to distribute callbacks across the current component scope in multiple ways with customizable exposed params.
