import React from 'react'
import { shallow } from 'enzyme'

import { Result } from './Result'

jest.mock('../pizzaCalculator')

import pizzaCalculator from '../pizzaCalculator'

describe('<Result/>', () => {
  it('loads a div containing four p elements', () => {
    pizzaCalculator.mockReturnValue({
      pizzas: {
        large: 1,
        medium: 4
      },
      total: 42
    })
    const wrapper = shallow(<Result />)
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('div p').length).toBe(4)
  })

  it('calculates the amount of pizza required', () => {
    pizzaCalculator.mockReturnValue({
      pizzas: {
        large: 1,
        medium: 4
      },
      total: 42
    })
    const wrapper = shallow(<Result bogof={false} people={6} slices={7} />)
    expect(wrapper.find('#pizzas-required').text()).toBe('1 Larges, 4 Mediums')
    expect(wrapper.find('#total-slices').text()).toBe('42 slices')
    expect(wrapper.find('#slices-left-over').text()).toBe('0 left over')
    expect(wrapper.find('#slices-each').text()).toBe('7.00 slices each')
  })

  it('calculates the amount of pizza required with a bogof offer', () => {
    pizzaCalculator.mockReturnValue({
      pizzas: {
        large: 0,
        medium: 6
      },
      total: 48
    })
    const wrapper = shallow(<Result bogof={true} people={6} slices={7} />)
    expect(wrapper.find('#pizzas-required').text()).toBe('6 Mediums')
    expect(wrapper.find('#total-slices').text()).toBe('48 slices')
    expect(wrapper.find('#slices-left-over').text()).toBe('6 left over')
    expect(wrapper.find('#slices-each').text()).toBe('8.00 slices each')
  })
})
