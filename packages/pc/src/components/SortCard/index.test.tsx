import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SortCard from './index';

describe('<SortCard />', () => {
  it('render SortCard with dumi', () => {
    render(<SortCard />);
    expect(screen.queryByText('')).toBeInTheDocument();
  });
});
