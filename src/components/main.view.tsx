import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import {
  AppBar,
  CardProps,
  Grid,
  GridProps,
  Tab,
  Tabs,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Store } from '../interface/redux/Store';
import * as All from '../pages';

const useStyles = (props?: any) =>
  makeStyles(theme => ({
    tabRoot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 'calc(100vh - 100px)',
      '& .MuiTab-wrapper': {
        textTransform: 'none',
        alignItems: 'start',
      },
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    gridRoot: {
      // prevent scrollbar caused page width position changes
      overflowY: 'scroll',
      '& .MuiGrid-item': {
        padding: 0,
      },
    },
    headerRoot: {
      background: 'linear-gradient(45deg, #FF1A6A 30%, #FF8E53 90%)',
    },
    title: {
      fontSize: '21px',
      color: '#FFFFFF',
    },
  }));

export const Main = (props: GridProps) => {
  const classes = useStyles()();
  return (
    <Grid container spacing={2} className={classes.gridRoot} {...props}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <VerticalTabs child={props.children} />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

const Header = (props: CardProps) => {
  const classes = useStyles()();
  return (
    <AppBar position='static' className={classes.headerRoot}>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Demo Box
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

interface TabsProps {
  child: React.ReactNode;
}

const VerticalTabs = ({ child }: TabsProps) => {
  const classes = useStyles()();

  const { currentName } = useSelector((store: Store) => store.localStorage);
  const displayList = Object.keys(All).map(x => ({ name: x, id: uuid() }));

  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const currentIdx = displayList.findIndex(x => x.name === currentName);
    currentIdx !== -1 && value !== currentIdx && setValue(currentIdx);
  }, [currentName, displayList, value]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const generateProps = (index: string | number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };

  console.log('hot:main');

  return (
    <div className={classes.tabRoot}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {displayList.map((x, idx) => (
          <Tab
            label={x.name.replace(/([A-Z])/g, ' $1').trim()}
            component={Link}
            to={`/${x.name}`}
            key={x.id}
            {...generateProps(idx)}
          />
        ))}
      </Tabs>
      {child}
    </div>
  );
};
