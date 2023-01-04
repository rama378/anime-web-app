import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Header from '../../components/Header/Header';

const renderer = new ShallowRenderer();

describe('<Header />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Header />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
