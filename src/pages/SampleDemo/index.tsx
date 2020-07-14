import raw from 'raw.macro';
import * as React from 'react';

import { Button } from '@material-ui/core';

import {
  Content,
  MarkdownContent
} from '../../components/Content.view';

const md = `
# In-line Markdown
## In-line Markdown
### In-line Markdown
#### In-line Markdown
##### In-line Markdown
###### In-line Markdown

>Some reference

\`\`\`
const data = 'sample';
\`\`\`
`;

const JsxContent = () => {
  return (
    <>
      <h1>JSX Component</h1>
      <Button variant='contained' onClick={() => alert('clicked')}>
        Default
      </Button>
      <Button variant='contained' color='primary' href='#contained-buttons'>
        Link
      </Button>
    </>
  );
};

export default (props: any) => {
  return (
    <Content {...props}>
      <MarkdownContent path={md} />
      <hr />
      <JsxContent />
      <hr />
      <MarkdownContent path={raw('./README.md')} />
    </Content>
  );
};
