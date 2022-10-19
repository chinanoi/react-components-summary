import React from 'react';
import withBtn from './withBtn';

const Item = withBtn((props: any) => {
  const { i, toggle, renderContent, visible } = props;
  return (
    <>
      <div>
        <span>我是内容{i}</span>
        <button onClick={toggle}>{visible ? '收起' : '展开'}</button>
      </div>
      <div>{renderContent()}</div>
    </>
  );
});

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
  return (
    <>
      <Header />
      <div>
        {Array.from({ length: 10 }, (v, k) => k).map((i) => (
          <Item i={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default index;
