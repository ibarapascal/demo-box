interface DataItem {
  title: string;
  type: 'blog' | 'demo';
  tags: Array<string>;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
  updateDate: Date;
  singleMd: boolean;
}

export const PageRegister: Array<DataItem> = [
  {
    title: 'GettingStarted',
    type: 'blog',
    tags: ['readme'],
    stars: 5,
    updateDate: new Date('2020/07/12'),
    singleMd: false,
  },
  {
    title: 'SampleDemo',
    type: 'demo',
    tags: ['readme', 'Sample String Tag', 'sample tag', 'sample icon tag'],
    stars: 4,
    updateDate: new Date('2020/07/11'),
    singleMd: false,
  },
  {
    title: 'ReactComponentCallback',
    type: 'blog',
    tags: ['react', 'callback', 'component design', 'design', 'event'],
    stars: 5,
    updateDate: new Date('2020/08/03'),
    singleMd: true,
  },
  {
    title: 'ReactStateManagement',
    type: 'blog',
    tags: ['react', 'state management', 'component design', 'design', 'redux'],
    stars: 4,
    updateDate: new Date('2020/08/07'),
    singleMd: true,
  },
  {
    title: 'CardChessPassOthello',
    type: 'demo',
    tags: ['react', 'game', 'othello', 'card chess'],
    stars: 4,
    updateDate: new Date('2020/08/31'),
    singleMd: false,
  },
  {
    title: 'CardChessPassGobang',
    type: 'demo',
    tags: ['react', 'game', 'gobang', 'card chess'],
    stars: 4,
    updateDate: new Date('2020/08/31'),
    singleMd: false,
  },
];
