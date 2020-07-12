import * as React from 'react';

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StarsIcon from '@material-ui/icons/Stars';

interface TagsItem {
  uuid: string;
  name: string;
  avatarStr?: string;
  avatarUrl?: string;
  avatarIcon?: React.ReactNode;
  color?: string;
  mergeName?: Array<string>;
}

export const TagsList: Array<TagsItem> = [
  {
    uuid: '2137b0c2-37a1-4abf-9f7d-ea70be74fdb8',
    name: 'Sample Tag',
  },
  {
    uuid: 'd032b66b-2c62-405b-b7ce-118792078edf',
    name: 'Sample Icon Tag',
    avatarIcon: <FolderOpenIcon />,
  },
  {
    uuid: '6d9dcfba-56c3-424c-8fc0-0ea3506159f2',
    name: 'Sample String Tag',
    avatarStr: 'S',
  },
  {
    uuid: '544d314e-aec3-4199-be78-df4f8f3fe1a9',
    name: 'React.js',
    mergeName: ['react', 'reactjs'],
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png',
  },
  {
    uuid: '06495384-b011-466e-8852-de062d66add5',
    name: 'README',
    avatarIcon: <StarsIcon />,
  },
];
