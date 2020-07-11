import Markdown from 'markdown-to-jsx';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import UrlService from '../services/UrlService';
import { actions } from './content.actions';

const useStyles = makeStyles(theme => ({
  contentRoot: {
    width: '100%',
    padding: 20,
  },
  markdownPre: {
    border: '1px solid #DDDDDD',
    borderLeft: '2px solid #FF8E53',
  },
}));

interface ContentProps {
  title: string;
  type: 'blog' | 'demo';
  tags: Array<string>;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
  updateDate: Date;
  children: any;
  history: any;
}

export const Content = ({
  title,
  type,
  tags,
  stars,
  updateDate,
  children,
  history,
}: ContentProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const title = UrlService.acquireName(history);
    const setCurrentTitle = async () =>
      dispatch(
        await actions.storeLocalStorageInput({
          item: 'currentName',
          value: title,
        }),
      );
    setCurrentTitle();
  }, [dispatch, history]);

  console.log('hot:content');

  return (
    <div className={`${classes.contentRoot} markdown-body`}>
      <Markdown
        options={{
          overrides: {
            pre: {
              component: '',
              props: {
                className: `${classes.markdownPre}`,
              },
            },
            code: {
              component: '',
              props: {
                className: `prettyprint`,
              },
            },
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  );
};
