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
    },
    title: {
      fontSize: '21px',
      color: '#FFFFFF',
    },
    tabRoot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 'calc(100vh - 75px)',
      '& .MuiTab-wrapper': {
        textTransform: 'none',
        alignItems: 'start',
      },
    },
    tabs: {
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
      <Grid item xs={2} />
      <Grid item xs={8}>
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
  moduleNameList: Array<string>;
}

const VerticalTabs = ({ child, moduleNameList }: TabsProps) => {
  const classes = useStyles()();

  const displayList = moduleNameList.map(x => ({ name: x, id: uuid() }));
  const name = window.location.href.split('/').pop();
  const currentIdx = displayList.findIndex(x => x.name === name);

  const [value, setValue] = React.useState(currentIdx);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const generateProps = (index: string | number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };

  console.log('hot:main', moduleNameList);

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
