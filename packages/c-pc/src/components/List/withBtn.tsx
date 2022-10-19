import React from 'react';
import useBtn from './useBtn';

const withBtn = (Wrapper: any) => (props: any) => {
  const { toggle, renderContent, visible } = useBtn();
  return (
    <Wrapper toggle={toggle} visible={visible} renderContent={renderContent} {...props}>
      {' '}
    </Wrapper>
  );
};

export default withBtn;
