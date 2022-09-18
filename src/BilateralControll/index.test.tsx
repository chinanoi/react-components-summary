import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import BilateralControll from './index';

describe('<BilateralControll />', () => {
  it('render BilateralControll with dumi', () => {
    const msg = 'dumi';

    render(<BilateralControll title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
