import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  AppBar,
  CardProps,
  Grid,
  GridProps,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createSvgIcon } from '@material-ui/core/utils';

import { actions } from './Main.actions';
import { RightSidebar } from './RightSidebar.view';

const useStyles = (props?: any) =>
  makeStyles(theme => ({
    gridRoot: {
      '& .MuiGrid-item': {
        padding: 0,
      },
    },
    headerRoot: {
      background: 'linear-gradient(45deg, #F50057 30%, #FF8E53 90%)',
      '& .MuiToolbar-root': {
        display: 'block',
        height: 48,
        minHeight: 0,
      },
    },
    headerTitle: {
      fontSize: '21px',
      color: '#FFFFFF',
      display: 'flex',
      height: '100%',
      float: 'left',
      alignItems: 'center',
    },
    headerIcon: {
      float: 'right',
      color: '#FFFFFF',
    },
    tabRoot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 'calc(100vh - 75px)',
      '& .MuiTab-root': {
        minWidth: 0,
        maxWidth: '100%',
      },
      '& .MuiTab-wrapper': {
        textTransform: 'none',
        alignItems: 'flex-end',
        whiteSpace: 'nowrap',
      },
      '& .MuiTouchRipple-root': {
        color: '#FF80AC',
      },
    },
    tabs: {
      width: '40%',
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

interface MainProps extends GridProps {
  moduleNameList: Array<string>;
}

export const Main = ({ moduleNameList, ...props }: MainProps) => {
  const classes = useStyles()();
  return (
    <Grid container spacing={2} className={classes.gridRoot} {...props}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={10}>
        <VerticalTabs child={props.children} moduleNameList={moduleNameList} />
      </Grid>
      <Grid item xs={2}>
        <RightSidebar />
      </Grid>
    </Grid>
  );
};

const Header = (props: CardProps) => {
  const classes = useStyles()();
  const GithubIcon = createSvgIcon(
    <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />,
    'github',
  );
  const onClickIconButton = () => {
    window.open(
      'https://github.com/ibarapascal/demo-box',
      '_blank',
      'noopener,noreferrer',
    );
  };
  return (
    <AppBar position='static' className={classes.headerRoot}>
      <Toolbar>
        <Typography variant='h6' className={classes.headerTitle}>
          Demo Box
        </Typography>
        <IconButton
          aria-label='github'
          className={classes.headerIcon}
          onClick={onClickIconButton}
        >
          <GithubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

interface TabsProps {
  child: React.ReactNode;
  moduleNameList: Array<string>;
}

const VerticalTabs = ({ child, moduleNameList }: TabsProps) => {
  const classes = useStyles()();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const name = window.location.href.split('/').pop();
    const setCurrentTitle = async () =>
      dispatch(
        await actions.storeLocalStorageInput({
          item: 'currentName',
          value: name,
        }),
      );
    setCurrentTitle();
    const currentIdx = moduleNameList.findIndex(x => x === name);
    currentIdx !== -1 && currentIdx !== value && setValue(currentIdx);
  }, [dispatch, value, moduleNameList]);

  const generateProps = (index: string | number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };

  process.env.NODE_ENV === 'development' &&
    console.log('dev:main', value, moduleNameList);

  return (
    <div className={classes.tabRoot}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {moduleNameList.map((x, idx) => (
          <Tab
            label={x.replace(/([A-Z])/g, ' $1').trim()}
            component={Link}
            to={`/${x}`}
            key={idx}
            {...generateProps(idx)}
          />
        ))}
      </Tabs>
      {child}
    </div>
  );
};
