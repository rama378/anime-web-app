import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Button from '../../common/components/Button/Button';

const renderer = new ShallowRenderer();

describe('<Button />', () => {
  it('should render and match the snapshot no prop given', () => {
    renderer.render(<Button>Button</Button>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render and match the snapshot given prop style default', () => {
    renderer.render(<Button style="default">Button</Button>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render and match the snapshot given prop style clear', () => {
    renderer.render(<Button style="clear">Button</Button>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
