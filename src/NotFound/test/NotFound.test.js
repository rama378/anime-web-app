import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import NotFound from '../NotFound';

const renderer = new ShallowRenderer();

describe('<NotFound />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<NotFound />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
