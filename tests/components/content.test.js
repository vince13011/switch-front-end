
import React from 'react';
import { expect } from 'chai';

import { shallow } from 'enzyme';

import recipesData from 'src/data';

// import du composant à tester
import Content from 'src/components/Content';
import Card from 'src/components/Card';

describe('Content Component', () => {
  const wrapper = shallow(<Content title="Test" recipes={recipesData} />);

  it('should have a className content', () => {
    expect(wrapper.props().className).to.be.equal('content');
    // © Diane
    expect(wrapper.hasClass('content')).to.be.true;
  });

  it('should have a title h1', () => {
    // on vérifie qu'on a bien une balise h1 dans le composant
    expect(wrapper.find('h1')).to.have.lengthOf(1);
    // on vérifie que cette balise reçoit bien ce qu'on passe en props
    expect(wrapper.find('h1').text()).to.be.equal('Test');
  });

  it('should have 2 Cards components', () => {
    expect(wrapper.find(Card)).to.have.lengthOf(2);
  });

  // it('should have props title', () => {
  //   console.log(wrapper.props());
  //   expect(wrapper.props().title).to.be.true;
  // });
});
