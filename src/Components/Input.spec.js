import React from 'react'
import { shallow } from 'enzyme'

import { Input } from './Input'

describe('<Input/>', () => {
  it('has an input for number of people and number of slices', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('input[type="number"]').length).toBe(2)
  })
  it('raises an event when the number of people value changes', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<Input onPeopleChange={onChange} />)
    wrapper
      .find('#number-of-people')
      .first()
      .simulate('change', { target: { value: '7' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
  it('raises an event when the number of slices value changes', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<Input onSlicesChange={onChange} />)
    wrapper
      .find('#number-of-slices')
      .first()
      .simulate('change', { target: { value: '7' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
  it('raises an event when the bogof value changes', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<Input onBogofChange={onChange} />)
    wrapper
      .find('#bogof')
      .first()
      .simulate('change', { target: { value: 'true' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
