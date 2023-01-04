import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Input from '../../common/components/Input/Input';
import {ReactComponent as SearchIcon} from "../../common/assets/images/icon/search.svg";

const renderer = new ShallowRenderer();

describe('<Input />', () => {
  it('should render and match the snapshot no prop given', () => {
    renderer.render(<Input />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render and match the snapshot given prop size large', () => {
    renderer.render(<Input size="large" />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render and match the snapshot given prop className Search__input', () => {
    renderer.render(<Input className="Search__input" />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render and match the snapshot given prop className Search__input', () => {
    renderer.render(<Input icon={<SearchIcon />} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
