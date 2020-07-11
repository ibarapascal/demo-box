import raw from 'raw.macro';
import * as React from 'react';

import {
  BaseProps,
  Content
} from '../../components/content.view';

export class GettingStarted extends React.Component<any> {
  config: BaseProps = {
    type: 'blog',
    tags: ['readme'],
    stars: 0,
    updateDate: new Date('2020/07/12'),
  };
  render() {
    return (
      <Content
        {...this.config}
        {...this.props}
        title={this.constructor.name}
        markdown={raw('./README.md')}
      />
    );
  }
}
