import raw from 'raw.macro';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import { Content } from '../../components/content.view';

export const SampleDemo = () => {
  return (
    <Content>
      <ReactMarkdown source={raw('./README.md')} escapeHtml={false} />
    </Content>
  );
};
