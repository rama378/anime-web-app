import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Card from '../../common/components/Card/Card';

const renderer = new ShallowRenderer();

describe('<Card />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Card />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  
  it('should render and match the snapshot given detail prop', () => {
    renderer.render((
      <Card detail={{
        mal_id: 1,
        url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
        images: {
          jpg: {
            image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
          },
          webp: {
            image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
          },
        },
        title: 'Cowboy Bebop',
        score: 1.5,
        scored_by: 12345,
        rating: 'PG-13 - Teens 13 or older',
      }} />
    ));
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
