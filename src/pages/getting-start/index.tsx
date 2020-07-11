import Markdown from 'markdown-to-jsx';
import raw from 'raw.macro';
import * as React from 'react';

import { Content } from '../../components/content.view';

export const GettingStart = () => {
  return (
    <Content>
      <Markdown>{raw('./README.md')}</Markdown>
    </Content>
  );
};
