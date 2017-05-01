import React from 'react'
import { shallow } from 'enzyme'

import CostInput from './CostInput'

describe('<CostInput/>', () => {
  it('has an input for total price', () => {
    const wrapper = shallow(<CostInput />)
    expect(wrapper.find('input[type="number"]').length).toBe(1)
  })
  it('raises an event when the cost value changes', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<CostInput handleCostChange={onChange} />)
    wrapper.find('#cost').first().simulate('change', { target: { value: 7 } })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(7)
  })
})
