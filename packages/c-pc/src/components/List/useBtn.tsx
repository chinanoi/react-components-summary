import React, { useState } from 'react';

const useBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible((v) => !v);
  };

  const renderContent = () => {
    if (!visible) return null;
    return <div>btn</div>;
  };

  return {
    visible,
    toggle,
    renderContent,
  };
};

export default useBtn;
