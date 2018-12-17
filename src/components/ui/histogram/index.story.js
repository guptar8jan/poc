import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../../../storybook.css';

import Histogram from './index';
import Star from '../star';

const reviewCounts = [
  { rating: 5, count: 100 },
  { rating: 4, count: 20 },
  { rating: 3, count: 30 },
  { rating: 2, count: 40 },
  { rating: 1, count: 10 },
];

const onClickHandler = action('rating was clicked.');

const star = <Star size={15} id="1" />;
const redStar = (
  <Star size={12} fillColor="red" fill={1} charCode={9733} id="1" />
);

storiesOf('[UI] Histogram', module)
  .add('with defaults', () => (
    <div>
      <div>
        <Histogram reviewCounts={reviewCounts} star={star} />
      </div>
      <pre className="example">
        {`const reviewCounts = [
  { rating: 5, count: 100 },
  { rating: 4, count: 20 },
  { rating: 3, count: 30 },
  { rating: 2, count: 40 },
  { rating: 1, count: 10 }
];

const star = <Star size={15} id="1" />;

<Histogram reviewCounts={reviewCounts} star={star} />`}
      </pre>
    </div>
  ))
  .add('with custom font and onClickHandler', () => (
    <div>
      <div>
        <Histogram
          reviewCounts={reviewCounts}
          onClick={onClickHandler}
          star={star}
        />
      </div>
      <pre className="example">
        {`const reviewCounts = [
  { rating: 5, count: 100 },
  { rating: 4, count: 20 },
  { rating: 3, count: 30 },
  { rating: 2, count: 40 },
  { rating: 1, count: 10 }
];

const fontStyle = \`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #666;
  font-weight: 700;
\`;

const onClickHandler = (e, rating) => {
  console.log(rating + ' was clicked.');
};
const star = <Star size={15} id="1" />;

<Histogram
  reviewCounts={reviewCounts}
  onClick={onClickHandler}
  star={star}
/>`}
      </pre>
    </div>
  ))
  .add('with custom font and color and onClickHandler', () => (
    <div>
      <div>
        <Histogram
          reviewCounts={reviewCounts}
          emptyColor="lightgrey"
          fillColor="red"
          onClick={onClickHandler}
          star={redStar}
        />
      </div>
      <pre className="example">
        {`const reviewCounts = [
  { rating: 5, count: 100 },
  { rating: 4, count: 20 },
  { rating: 3, count: 30 },
  { rating: 2, count: 40 },
  { rating: 1, count: 10 }
];


const onClickHandler = (e, rating) => {
  console.log(rating + ' was clicked.');
};
const redStar = (
  <Star size={12} fillColor="red" fill={1} charCode={9733} id="1" />
);

<Histogram
  reviewCounts={reviewCounts}
  emptyColor="lightgrey"
  fillColor="red"
  onClick={onClickHandler}
  star={redStar}
/>`}
      </pre>
    </div>
  ));
