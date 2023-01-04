import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import Menu from '../../components/Menu/Menu';

const renderer = new ShallowRenderer();

describe('<Menu />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(
      (
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      )
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
