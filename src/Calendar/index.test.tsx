import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from './index';

describe('<Calendar />', () => {
  it('render Calendar with dumi', () => {
    const timestamp = Date.now();
    render(<Calendar timestamp={timestamp} />);
    expect(screen.queryByText('')).toBeInTheDocument();
  });
});
