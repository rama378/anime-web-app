import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Detail from '../Detail';

const renderer = new ShallowRenderer();

describe('<Detail />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Detail />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
