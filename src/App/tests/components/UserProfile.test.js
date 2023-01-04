import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import UserProfile from '../../components/UserProfile/UserProfile';

const renderer = new ShallowRenderer();

describe('<UserProfile />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<UserProfile />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
