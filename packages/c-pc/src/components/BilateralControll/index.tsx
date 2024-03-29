import React from 'react';

interface IProps {
  title: string;
}

const BilateralControll = (props: IProps) => {
  const { title } = props;
  return <h1>{title}</h1>;
};
export default BilateralControll;
