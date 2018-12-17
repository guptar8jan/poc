import React from 'react';
import renderer from 'react-test-renderer';

import Star from './index';

describe('snapshot', () => {
  it('renders with default', () => {
    const tree = renderer
      .create(<Star size={15} id="1" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('snapshot', () => {
  it('renders with custom settings', () => {
    const tree = renderer
      .create(
        <Star
          size={12}
          fillColor="red"
          fill={1}
          charCode={9733}
          id="1"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('snapshot', () => {
  it('renders with custom click handler', () => {
    const onClick = () => {};

    const tree = renderer
      .create(<Star size={12} id="1" onClick={onClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
