import raw from 'raw.macro';
import * as React from 'react';

import {
  Content,
  MarkdownContent
} from '../../components/Content.view';

export class GettingStarted extends React.Component<any> {
  title = this.constructor.name;
  render() {
    return (
      <Content {...this.props} title={this.title}>
        <MarkdownContent path={raw('./README.md')} />
      </Content>
    );
  }
}
