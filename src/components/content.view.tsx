import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = (props?: any) =>
  makeStyles(theme => ({
    root: {
      width: '100%',
      padding: 20,
    },
  }));

interface ContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  const classes = useStyles()();
  return <div className={classes.root}>{children}</div>;
};
