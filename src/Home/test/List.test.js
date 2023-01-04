import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import List from '../components/List/List';
import animeList from '../anime-list.json';

const renderer = new ShallowRenderer();

describe('<List />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<List list={animeList} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
