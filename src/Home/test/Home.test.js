import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Home from '../Home';

const renderer = new ShallowRenderer();

describe('<Home />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Home />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
