import * as React from 'react';
import { render } from 'react-dom';
import {
  Provider,
  useDispatch,
  useSelector
} from 'react-redux';
import {
  HashRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import {
  applyMiddleware,
  createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
  Dialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import { Main } from './components/Main.view';
import { Store } from './interface/redux/Store';
import { PageRegister } from './PageRegister';
import { reducer } from './reducer';

const theme = createMuiTheme({});

const preloadStore = {};

const store = createStore(
  reducer,
  preloadStore,
  composeWithDevTools(applyMiddleware(thunk)),
);

interface ModuleItem {
  m: any;
  name: string;
}

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  static getDerivedStateFromError() {}
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidCatch(error: any, errorInfo: any) {}
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <this.ContentRender />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    );
  }
  ContentRender: React.FC = () => {
    const errorMessage = useSelector((store: Store) => store.errorMessage);
    const errInfoList = Object.entries(errorMessage);
    const dispatch = useDispatch();
    const isDialogOpen = () => {
      return errInfoList.length !== 0;
    };
    const onDialogClose = () => {
      dispatch({
        type: 'catchErrorMessage',
        payload: {},
      });
    };

    const [modules, setModules] = React.useState<Array<ModuleItem>>([]);
    React.useEffect(() => {
      const dynamicImport = async () => {
        let temp: Array<ModuleItem> = [];
        try {
          await Promise.all(
            PageRegister.map(async x => {
              const module = await import(`./pages/${x.title}`);
              temp.push({ m: module['default'], name: x.title });
            }),
          );
        } catch {
          console.log('Import failed');
        }
        setModules(temp);
      };
      dynamicImport();
    }, []);

    process.env.NODE_ENV === 'development' && console.log('dev:index');

    return (
      <>
        <Main moduleNameList={modules.map(x => x.name)}>
          <Switch>
            {modules.map(x => (
              <Route exact path={`/${x.name}`} component={x.m} key={x.name} />
            ))}
            {modules.length !== 0 && <Redirect to='/GettingStarted' />}
          </Switch>
        </Main>
        <Dialog open={isDialogOpen()} onClose={onDialogClose}>
          <DialogTitle>Error occurred</DialogTitle>
          <DialogContent dividers>
            {errInfoList.map((x, idx) => (
              <div key={idx}>
                {`${x[0]}: ${x[1]}`}
                <hr />
              </div>
            ))}
          </DialogContent>
        </Dialog>
      </>
    );
  };
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
