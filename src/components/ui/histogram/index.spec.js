import React from 'react';
import renderer from 'react-test-renderer';

import Star from '../star';
import RatingsHistogram from './index';

const reviewCounts = [
  { rating: 5, count: 20 },
  { rating: 4, count: 20 },
  { rating: 3, count: 20 },
  { rating: 2, count: 20 },
  { rating: 1, count: 20 },
];

const onClickHandler = () => {};
const star = <Star size={15} id="1" />;

describe('snapshot', () => {
  it('renders with default', () => {
    const tree = renderer
      .create(<RatingsHistogram reviewCounts={reviewCounts} star={star} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('snapshot', () => {
  it('renders with custom font and onClickHandler', () => {
    const tree = renderer
      .create(
        <RatingsHistogram
          reviewCounts={reviewCounts}
          onClick={onClickHandler}
          star={star}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('snapshot', () => {
  it('renders with custom star and colors', () => {
    const redStar = (
      <Star
        size={12}
        fillColor="red"
        fill={1}
        charCode={9733}
        id="1"
      />
    );
    const tree = renderer
      .create(
        <RatingsHistogram
          reviewCounts={reviewCounts}
          emptyColor="lightgrey"
          fillColor="red"
          onClick={onClickHandler}
          star={redStar}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
