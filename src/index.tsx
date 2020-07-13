import * as React from 'react';
import { render } from 'react-dom';
import {
  Provider,
  useDispatch,
  useSelector
} from 'react-redux';
import {
  BrowserRouter,
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
          <BrowserRouter>
            <this.ContentRender />
          </BrowserRouter>
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

    const [modules, setModules] = React.useState<
      Array<{ m: any; name: string }>
    >([]);

    React.useEffect(() => {
      const dynamicImport = async () => {
        const tempModules: Array<{ m: any; name: string }> = [];
        try {
          await Promise.all(
            PageRegister.map(async x => {
              const module = await import(`./pages/${x.title}`);
              // Need to set in-place
              const name = Object.keys(module)[0];
              tempModules.push({ m: module[name], name: x.title });
            }),
          );
        } catch {
          console.log('Import failed');
        }
        setModules(tempModules);
      };
      dynamicImport();
    }, []);

    process.env.NODE_ENV === 'development' && console.log('hot:index');

    return (
      <>
        <Main moduleNameList={modules.map(x => x.name)}>
          <Switch>
            {modules.map((x, idx) => (
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
