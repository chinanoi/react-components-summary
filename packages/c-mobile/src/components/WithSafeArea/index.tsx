import React from 'react';
import './index.less';

const WithSafeArea = (Wrapper: any) => {
  return (props: any) => {
    return (
      <div className="safe-area">
        <Wrapper {...props} />
      </div>
    );
  };
};

export default WithSafeArea;
