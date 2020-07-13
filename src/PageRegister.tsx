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
];
