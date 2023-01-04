import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Button from '../../common/components/Button/Button';

const renderer = new ShallowRenderer();

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Button style="default">Button</Button>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
