import React, { useState } from 'react';
import withBtn from './withBtn';

const Item = (props: any) => {
  const { i, setVisibleArr, visibleArr } = props;

  const toggle = () => {
    if (visibleArr.includes(i)) {
      setVisibleArr((pre: any) => {
        return pre.filter(
          (item: any) => item !== i
        );
      });
    } else {
      setVisibleArr([...visibleArr, i]);
    }
  };
  return (
    <>
      <div>
        <span>我是内容{i}</span>
        <button
          onClick={toggle}
        >
          {visibleArr.includes(i) ? '收起' : '展开'}
        </button>
      </div>
      <div>
        {visibleArr.includes(i) && (
          <div>btn</div>
        )}
      </div>
    </>
  );
};

const Header = withBtn((props: any) => {
  const { i, toggle, renderContent, visible } = props;
  console.log('visible', visible);
  return (
    <>
      <div>
        <h1 style={{ display: 'inline-block' }}>我是内容{i}</h1>
        <button onClick={toggle}>{visible ? '收起' : '展开'}</button>
      </div>
      <div>{renderContent()}</div>
    </>
  );
});

const index = () => {
  const [visibleArr, setVisibleArr] = useState([]);
  return (
    <>
      <Header />
      <div>
        {Array.from({ length: 10 }, (v, k) => k).map((i) => (
          <Item
            i={i}
            key={i}
            visibleArr={visibleArr}
            setVisibleArr={setVisibleArr}
          />
        ))}
      </div>
    </>
  );
};

export default index;
