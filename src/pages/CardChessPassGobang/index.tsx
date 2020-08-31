// import raw from 'raw.macro';
import * as React from 'react';

import {
  Content,
  // MarkdownContent
} from '../../components/Content.view';

export default (props: any) => {
  return (
    <Content {...props}>
      {/* <MarkdownContent path={raw('./README.md')} /> */}
      <Gobang />
    </Content>
  );
};

const Gobang = () => {
  const len = 19;
  const row = [...Array(len).fill(null)];
  const metrix = row.map(x => [...row]);
  const [data, setData] = React.useState<Array<Array<0 | 1 | null>>>(metrix);
  const [runner, setRunner] = React.useState<0 | 1>(1);
  const [history, setHistory] = React.useState<
    Array<{ ri: number; ci: number }>
  >([]);

  /**
   * One step play
   */
  const onClick = ({ ri, ci }: { ri: number; ci: number }) => () => {
    if (data[ri][ci] === null) {
      data[ri][ci] = runner;
      setRunner(runner === 1 ? 0 : 1);
      setData(data);
      setHistory([...history, { ri, ci }]);
    }
  };
  /**
   * Reverse one step
   */
  const onClickReverse = () => {
    const last = history.pop();
    if (last) {
      data[last.ri][last.ci] = null;
      setRunner(runner === 1 ? 0 : 1);
      setData(data);
      setHistory(history);
    }
  };
  /**
   * Return to init status
   */
  const onClickRestart = () => {
    setRunner(1);
    setData(metrix);
    setHistory([]);
  };

  return (
    <div className='App' style={{ display: 'grid' }}>
      <h1 onClick={onClickRestart}>Card Chess Pass - Gobang</h1>
      <div style={{ display: 'grid' }}>
        <ChessMan runner={runner} />
        <h2 onClick={onClickReverse}>
          Current runner: {runner === 1 ? 'black' : 'white'}
        </h2>
      </div>
      <div
        style={{
          border: '1px solid black',
          display: 'inline-block',
          justifySelf: 'center',
        }}
      >
        {data.map((x, rowIdx) => (
          <div key={rowIdx} style={{ display: 'flex' }}>
            {x.map((y, columnIdx) => (
              <div
                key={columnIdx}
                style={{
                  float: 'left',
                  outline: '1px solid #BBBBBB',
                  width: '3vw',
                  height: '3vw',
                  display: 'grid',
                }}
                onClick={onClick({ ri: rowIdx, ci: columnIdx })}
              >
                {y !== null && <ChessMan runner={y} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ChessMan = ({ runner }: { runner: 0 | 1 }) => (
  <div
    style={{
      border: '1px solid black',
      borderRadius: '2vw',
      height: '2vw',
      width: '2vw',
      backgroundColor: `${runner === 1 ? '#333333' : 'white'}`,
      justifySelf: 'center',
      alignSelf: 'center',
    }}
  />
);
