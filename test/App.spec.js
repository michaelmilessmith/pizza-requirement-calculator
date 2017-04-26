import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from '../src/Components/App';

const props = {
    store: {
      people: 0,
      slices: 0
    }
  };
describe('<App/>', () => {
  it('renders one <Result/> and one <Input/> component', () => {
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper.find('Result').length).to.equal(1);
    expect(wrapper.find('Input').length).to.equal(1);
  });
});
