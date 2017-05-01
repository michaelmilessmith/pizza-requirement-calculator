import React from 'react'
import { shallow } from 'enzyme'

import CostResult from './CostResult'

describe('<CostResult/>', () => {
  it('calculates how much money each person owes', () => {
    const wrapper = shallow(<CostResult people={6} cost={36} />)
    expect(wrapper.find('#cost-per-person').text()).toBe('£6.00 each')
  })
})
