import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Search from '../components/Search/Search';

const renderer = new ShallowRenderer();

describe('<Search />', () => {
  it('should render and match the snapshot no prop given', () => {
    renderer.render(<Search />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
