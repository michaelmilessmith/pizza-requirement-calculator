import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Input from '../src/Components/Input';

describe('<Input/>', () => {
  it('has an input for number of people and number of slices', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input[type="number"]').length).to.equal(2);
  });
  it('raises an event when the number of people value changes', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<Input handlePeopleChange={onChange}/>);
    wrapper.find('#number-of-people').first().simulate('change', {target: {value: '7'}});
    expect(onChange).to.have.property('callCount', 1);
  });
  it('raises an event when the number of slices value changes', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<Input handleSlicesChange={onChange}/>);
    wrapper.find('#number-of-slices').first().simulate('change', {target: {value: '7'}});
    expect(onChange).to.have.property('callCount', 1);
  });
  it('raises an event when the bogof value changes', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<Input handleBogofChange={onChange}/>);
    wrapper.find('#bogof').first().simulate('change', {target: {value: 'true'}});
    expect(onChange).to.have.property('callCount', 1);
  });
});
