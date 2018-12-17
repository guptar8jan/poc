import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import '../../../storybook.css';

import { ROUND_STAR_CHARCODE } from './constants';
import Star from './index';

const settings = {
  charCode: ROUND_STAR_CHARCODE,
  fill: 0.5,
  size: 20,
  fillColor: 'blue',
  emptyColor: 'lightgray',
  eventHandlers: {},
};

const customSVG = (
  <svg>
    <circle cx="10" cy="10" r="10" />
  </svg>
);

const events = {
  onClick: action('onClick'),
  onMouseOver: action('onMouseOver'),
};

storiesOf('[UI] Star', module)
  .add('default settings', () => (
    <div>
      <div>
        <Star />
      </div>
      <pre className="example">{'<Star />'}</pre>
    </div>
  ))
  .add('custom settings', () => (
    <div>
      <div>
        <Star id="1" {...settings} />
      </div>
      <pre className="example">
        {`const settings = {
  charCode: 9733, //normally read from config hub star configuration section
  fill: 0.5,
  size: 20,
  fillColor: 'blue',
  emptyColor: 'lightgray'
};

<Star {...settings}/>`}
      </pre>
    </div>
  ))
  .add('event handlers', () => (
    <div>
      <div>
        <Star {...events} />
      </div>
      <pre className="example">
        {`const events = {
    onClick: () => console.log('onClick'),
    onMouseOver: () => console.log('onMouseOver'),
  }
};

<Star {...events}/>`}
      </pre>
    </div>
  ));
