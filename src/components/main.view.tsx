import * as React from 'react';
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

import * as All from '../pages';

const useStyles = (props?: any) =>
  makeStyles(theme => ({
    root: {
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
      '& .MuiGrid-item': {
        padding: 0,
      },
    },
    headerRoot: {
      background: 'linear-gradient(45deg, #FF1A6A 30%, #FF8E53 90%)',
    },
    title: {
      fontSize: '21px',
      color: '#000000',
    },
  }));

export const Main = (props: GridProps) => {
  const classes = useStyles()();
  return (
    <Grid container spacing={2} className={classes.gridRoot} {...props}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <VerticalTabs child={props.children} />
      </Grid>
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
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const generateProps = (index: string | number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };
  const displayList = Object.keys(All).map(x => ({ name: x, id: uuid() }));
  return (
    <div className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
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
