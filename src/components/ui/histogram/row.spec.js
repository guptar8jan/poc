import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Row from './row';
import Star from '../star';

const props = {
  emptyColor: '#000',
  fillColor: '#fff',
};

describe('snapshot', () => {
  it('snapshot renders', () => {
    const redStar = (
      <Star size={12} fillColor="red" fill={1} charCode={9733} id="1" />
    );

    const tree = renderer
      .create(
        <Row {...props} rating={5} totalReviews={100} reviewCount={20} star={redStar} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('snapshot', () => {
  it('snapshot renders with all props', () => {
    const redStar = (
      <Star size={12} fillColor="red" fill={1} charCode={9733} id="1" />
    );
    const fontStyle = `
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      color: #666;
      font-weight: 700;
    `;
    const tree = renderer
      .create(
        <Row
          rating={5}
          totalReviews={100}
          reviewCount={20}
          star={redStar}
          emptyColor="lightgrey"
          fillColor="red"
          fontStyle={fontStyle}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
