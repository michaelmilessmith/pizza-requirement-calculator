import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Result from '../src/Components/Result';
import { options } from '../src/pizzaOptions';

describe('<Result/>', () => {
  it('loads a div containing four p elements', () => {
    const wrapper = shallow(<Result options={options}/>);
    expect(wrapper.find('div').length).to.equal(1);
    expect(wrapper.find('div p').length).to.equal(4);
  });

  it('calculates the amount of pizza required', () => {
    const wrapper = shallow(<Result
      options={options}
      people={6}
      slices={7}
      />);
    const {solution, slicesAvailible} = wrapper.instance()._calculateSolution(42, options);
    expect(solution).to.equal("Six Mediums");
    expect(slicesAvailible).to.equal(48);
    expect(wrapper.find('#pizzas-required').text()).to.equal("Six Mediums");
    expect(wrapper.find('#total-slices').text()).to.equal("48 slices");
    expect(wrapper.find('#slices-left-over').text()).to.equal("6 left over");
    expect(wrapper.find('#slices-each').text()).to.equal("8.00 slices each");
  });
});
