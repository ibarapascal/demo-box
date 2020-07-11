import raw from 'raw.macro';
import * as React from 'react';

import { Content } from '../../components/content.view';

export const SampleDemo = (props: any) => {
  return (
    <Content
      title='SampleDemo'
      type='demo'
      tags={['readme']}
      stars={0}
      updateDate={new Date('2020/07/12')}
      {...props}
    >
      {raw('./README.md')}
    </Content>
  );
};
