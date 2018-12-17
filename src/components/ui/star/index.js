import propTypes from 'prop-types';
import React from 'react';
import uuid from 'uuid';
import {
  css,
  cx
} from 'emotion';

import * as classNames from './index.css';
import {
  ROUND_STAR_CHARCODE,
  POINTY_STAR_CHARCODE,
  ROUND_STAR_SVG,
  POINTY_STAR_SVG,
} from './constants';
import { filterEvents } from '../../utils';

class Star extends React.Component {
  static displayName = 'Star';

  static defaultProps = {
    charCode: POINTY_STAR_CHARCODE,
    fill: 1,
    size: 50,
    fillColor: 'orange',
    emptyColor: 'lightgray',
    viewBox: '0 0 25 25',
  };

  state = {
    id: `bv_star_{this.props.id} || uuid.v4()}`,
  };

  _renderFillElement () {
    const { emptyColor, fill, fillColor } = this.props;
    const percentFilled = fill === 0 ? '0' : `${fill * 100}%`;
    const leftClassName = cx([
      classNames.leftStop,
      {
        [css`stop-color: ${fillColor};`]: !!fillColor,
      },
    ]);
    const rightClassName = cx([
      classNames.rightStop,
      {
        [css`stop-color: ${emptyColor};`]: !!emptyColor,
      },
    ]);

    return (
      <defs>
        <linearGradient id={this.state.id}>
          <stop className={leftClassName} offset={percentFilled} />
          <stop className={rightClassName} />
        </linearGradient>
      </defs>
    );
  }

  _getSVGInnerElement () {
    return this.props.charCode === ROUND_STAR_CHARCODE ? ROUND_STAR_SVG : POINTY_STAR_SVG;
  }

  render () {
    const { className, size, viewBox } = this.props;

    return (
      <svg
        className={cx([classNames.svg, className])}
        height={size}
        width={size}
        viewBox={viewBox}
        {...filterEvents(this.props)}
      >
        {this._renderFillElement()}
        {this._getSVGInnerElement()}
      </svg>
    );
  }
}

Star.propTypes = {
    charCode: propTypes.oneOf([
      POINTY_STAR_CHARCODE,
      ROUND_STAR_CHARCODE,
    ]),
    className: propTypes.string,
    emptyColor: propTypes.string,
    fill: propTypes.number,
    fillColor: propTypes.string,
    id: propTypes.string,
    size: propTypes.number
};

export default Star;
