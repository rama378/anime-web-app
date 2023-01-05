import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Pagination from '../../common/components/Pagination/Pagination';

const renderer = new ShallowRenderer();

describe('<Pagination />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Pagination maxPage={10} page={0} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
