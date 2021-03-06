import Markdown from 'markdown-to-jsx';
import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contentRoot: {
    width: '100%',
    padding: 20,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      // set to 0 to hide scroll bar while still being able to scroll
      width: 3,
    },
    '&::-webkit-scrollbar-track': {
      background: '#FF8E53',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(45deg, #F50057 10%, #FF8E53 90%)',
    },
    '& iframe': {
      border: '1px solid #DDDDDD !important',
      borderLeft: '2px solid #FF8E53 !important',
      marginTop: '1em',
      marginBottom: '1em',
    },
  },
  markdownPre: {
    border: '1px solid #DDDDDD',
    borderLeft: '2px solid #FF8E53',
  },
}));

interface ContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  const classes = useStyles();
  /**
   * Declaratively loading javascript
   * Used because the script in `index.html` won't re-run after react-router-dom changed
   * @param src
   */
  const loadScript = (src: string) => {
    const tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  };
  loadScript(
    'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js',
  );

  process.env.NODE_ENV === 'development' && console.log('dev:content');

  return (
    <div className={`${classes.contentRoot} markdown-body`}>{children}</div>
  );
};

interface MarkdownContentProps {
  path: string;
}

export const MarkdownContent = ({ path }: MarkdownContentProps) => {
  const classes = useStyles();
  return (
    <Markdown
      options={{
        overrides: {
          pre: {
            component: '',
            props: {
              className: `${classes.markdownPre}`,
            },
          },
          iframe: {
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
      {path}
    </Markdown>
  );
};
