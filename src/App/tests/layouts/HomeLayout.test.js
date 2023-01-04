import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import HomeLayout from '../../layouts/HomeLayout';

const renderer = new ShallowRenderer();

describe('<HomeLayout />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<HomeLayout>Content</HomeLayout>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
