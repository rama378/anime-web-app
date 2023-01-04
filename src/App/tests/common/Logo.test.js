import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Logo from '../../common/components/Logo/Logo';

const renderer = new ShallowRenderer();

describe('<Logo />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Logo />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
