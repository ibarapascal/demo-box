import raw from 'raw.macro';
import * as React from 'react';

import {
  Content,
  MarkdownContent
} from '../../components/Content.view';

export default {
  [window.name]: (props: any) => {
    return (
      <Content {...props}>
        <MarkdownContent path={raw('./README.md')} />
      </Content>
    );
  },
}[window.name];
