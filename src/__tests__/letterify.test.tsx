import React from 'react';
import { Letterify } from '../lib';
import renderer from 'react-test-renderer';

describe('Letterfiy tests', () => {
  it('animates letters direction inplace', () => {
    var animate: boolean = false;
    const letteriftTree = renderer
    .create(<Letterify 
      letterifyString="Test letterify component"
      animate={animate}
    />)
    .toJSON();
  expect(letteriftTree).toMatchSnapshot();
  });

  it('animates letters direction up', () => {
    var animate: boolean = false;
    const letteriftTree = renderer
    .create(<Letterify 
      letterifyString="Test letterify component"
      animate={animate}
      direction={"up"}
    />)
    .toJSON();
  expect(letteriftTree).toMatchSnapshot();
  });

  it('animates letters direction down', () => {
    var animate: boolean = false;
    const letteriftTree = renderer
    .create(<Letterify 
      letterifyString="Test letterify component"
      animate={animate}
      direction={"down"}
    />)
    .toJSON();
  expect(letteriftTree).toMatchSnapshot();
  });

  it('animates letters direction right', () => {
    var animate: boolean = false;
    const letteriftTree = renderer
    .create(<Letterify 
      letterifyString="Test letterify component"
      animate={animate}
      direction={"right"}
    />)
    .toJSON();
  expect(letteriftTree).toMatchSnapshot();
  });

  it('animates letters direction left', () => {
    var animate: boolean = false;
    const letteriftTree = renderer
    .create(<Letterify 
      letterifyString="Test letterify component"
      animate={animate}
      direction={"left"}
    />)
    .toJSON();
  expect(letteriftTree).toMatchSnapshot();
  });

  /* Mising props */
  it('missing letterfiy string', () => {
    var animate: boolean = false;
    const letteriftTree = renderer
    .create(<Letterify 
      animate={animate}
    />)
    .toJSON();
  expect(letteriftTree).toMatchSnapshot();
  });

  it('missing animate boolean', () => {
    var animate: boolean = false;
    const letteriftTree = renderer
    .create(<Letterify 
      letterifyString="Test letterify component"
    />)
    .toJSON();
  expect(letteriftTree).toMatchSnapshot();
  });

  it('missing all reuired props', () => {
    var animate: boolean = false;
    const letteriftTree = renderer
    .create(<Letterify 
    />)
    .toJSON();
  expect(letteriftTree).toMatchSnapshot();
  });

});