import propTypes from 'prop-types';
import React from 'react';
import {
  css,
  cx
} from 'emotion';

import * as classNames from './row.css';
import { filterEvents } from '../../utils';

const Row = ({
  emptyColor,
  fillColor,
  rating,
  reviewCount,
  star,
  totalReviews,
  ...props
}) => {
  const events = filterEvents(props);
  const containerClassName = cx([
    classNames.container,
    css`cursor: ${events.onClick ? 'pointer' : 'default'};`,
  ]);
  const emptyClassName = cx([
    classNames.bar,
    classNames.empty,
    {
      [css`background-color: ${emptyColor};`]: !!emptyColor,
    },
  ]);
  const filledClassName = cx([
    classNames.bar,
    classNames.filled,
    {
      [css`background-color: ${fillColor};`]: !!fillColor,
    },
    css`width: ${(reviewCount * 100) / totalReviews}%`,
  ]);

  return (
    <div className={containerClassName} {...events}>
      <div className={cx(classNames.cell, classNames.prefix)}>{rating}</div>
      <div className={classNames.star}>{star}</div>
      <div className={classNames.fullBar}>
        <div className={emptyClassName}>
          <div className={filledClassName} />
        </div>
      </div>
      <div className={cx(classNames.cell, classNames.rating)}>{reviewCount}</div>
    </div>
  );
};

Row.displayName = 'Row';

Row.propTypes = {
    emptyColor: propTypes.string.isRequired,
    fillColor: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    totalReviews: propTypes.number.isRequired,
    reviewCount: propTypes.number.isRequired,
    star: propTypes.element.isRequired,
    onClick: propTypes.func,
};

export default Row;
