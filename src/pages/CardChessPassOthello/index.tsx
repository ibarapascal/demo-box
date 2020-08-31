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
      <Othello />
    </Content>
  );
};

const Othello = () => {
  const len = 8;
  const row = [...Array(len).fill(null)];
  const metrix = row.map(x => [...row]);
  // const metrix = [...Array(len).fill([...Array(len).fill(null)])];
  metrix[3][3] = 0;
  metrix[4][4] = 0;
  metrix[3][4] = 1;
  metrix[4][3] = 1;
  const [data, setData] = React.useState<Array<Array<0 | 1 | null>>>(metrix);
  const [runner, setRunner] = React.useState<0 | 1>(1);
  const [isOver, setIsOver] = React.useState<0 | 1 | null | undefined>(
    undefined,
  );
  const [history, setHistory] = React.useState<
    Array<Array<{ ri: number; ci: number; value: 0 | 1 | null }>>
  >([]);

  /**
   * Check reverses for each input
   */
  const changePairList = ({
    ri,
    ci,
    runner,
  }: {
    ri: number;
    ci: number;
    runner: 0 | 1;
  }) => {
    const operation = [
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
    ];
    const operatedList = operation.map(op => {
      let result = [];
      let r = ri + op[0];
      let c = ci + op[1];
      while (data[r] && ![null, undefined, runner].includes(data[r][c])) {
        result.push({
          ri: r,
          ci: c,
        });
        r += op[0];
        c += op[1];
      }
      return data[r] && data[r][c] === runner ? result : [];
    });
    return operatedList.flat();
  };

  /**
   * Check game status by steps done
   */
  const flatData = data.flat().flat();
  if (isOver === undefined && flatData.every(x => x !== null)) {
    const blackAmount = flatData.filter(x => x === 1).length;
    const whiteAmount = flatData.filter(x => x === 0).length;
    setIsOver(
      blackAmount > whiteAmount ? 1 : blackAmount < whiteAmount ? 0 : null,
    );
  }
  /**
   * Check game status by avaliable inputs
   */
  const flatNullPosition = flatData
    .map((x, idx) => ({ ri: Math.floor(idx / len), ci: idx % len, value: x }))
    .filter(x => x.value === null);
  if (
    isOver === undefined &&
    flatNullPosition.length > 0 &&
    flatNullPosition.every(x => {
      return (
        changePairList({
          ri: x.ri,
          ci: x.ci,
          runner: runner,
        }).length === 0
      );
    })
  ) {
    setIsOver(runner === 1 ? 0 : 1);
  }

  /**
   * One step play
   */
  const onClick = ({ ri, ci }: { ri: number; ci: number }) => () => {
    const pair = changePairList({ ri: ri, ci: ci, runner: runner });
    if (data[ri][ci] === null && pair.length > 0) {
      let historyItem = [
        {
          ri: ri,
          ci: ci,
          value: data[ri][ci],
        },
      ];
      data[ri][ci] = runner;
      pair.forEach(x => {
        const newValue = data[x.ri][x.ci] === 1 ? 0 : 1;
        historyItem.push({
          ri: x.ri,
          ci: x.ci,
          value: data[x.ri][x.ci],
        });
        data[x.ri][x.ci] = newValue;
      });
      setRunner(runner === 1 ? 0 : 1);
      setData(data);
      setHistory([...history, historyItem]);
    }
  };
  /**
   * Reverse one step
   */
  const onClickReverse = () => {
    const last = history.pop();
    if (last) {
      last.forEach(x => {
        data[x.ri][x.ci] = x.value;
      });
      setRunner(runner === 1 ? 0 : 1);
      setData(data);
      setHistory(history);
      if (isOver !== undefined) {
        setIsOver(undefined);
      }
    }
  };
  /**
   * Return to init status
   */
  const onClickRestart = () => {
    setRunner(1);
    setData(metrix);
    setHistory([]);
    setIsOver(undefined);
  };

  return (
    <div className='App' style={{ display: 'grid' }}>
      <h1 onClick={onClickRestart}>Card Chess Pass - Othello</h1>
      <div style={{ display: 'grid' }}>
        <ChessMan runner={runner} />
        {isOver === undefined ? (
          <h2 onClick={onClickReverse}>
            Current runner: {runner === 1 ? 'black' : 'white'}
          </h2>
        ) : (
          <h2 onClick={onClickReverse}>
            {`Winner: ${
              isOver === null ? 'both' : isOver === 1 ? 'black' : 'white'
            }`}
          </h2>
        )}
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
                  outline: '1px solid black',
                  width: '6vw',
                  height: '6vw',
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
      borderRadius: '2.5vw',
      height: '5vw',
      width: '5vw',
      backgroundColor: `${runner === 1 ? '#333333' : 'white'}`,
      justifySelf: 'center',
      alignSelf: 'center',
    }}
  />
);
