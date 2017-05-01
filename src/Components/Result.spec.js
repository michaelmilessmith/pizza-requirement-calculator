import React from 'react'
import { shallow } from 'enzyme'

import Result from './Result'

describe('<Result/>', () => {
  it('loads a div containing four p elements', () => {
    const wrapper = shallow(<Result />)
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('div p').length).toBe(4)
  })

  it('calculates the amount of pizza required', () => {
    const wrapper = shallow(
      <Result pizzaOptions={{ bogof: false }} people={6} slices={7} />
    )
    const { solution, slicesAvailible } = wrapper
      .instance()
      ._calculateSolution(42)
    expect(solution).toBe('1 Larges, 4 Mediums')
    expect(slicesAvailible).toBe(42)
    expect(wrapper.find('#pizzas-required').text()).toBe('1 Larges, 4 Mediums')
    expect(wrapper.find('#total-slices').text()).toBe('42 slices')
    expect(wrapper.find('#slices-left-over').text()).toBe('0 left over')
    expect(wrapper.find('#slices-each').text()).toBe('7.00 slices each')
  })

  it('calculates the amount of pizza required with a bogof offer', () => {
    const wrapper = shallow(
      <Result pizzaOptions={{ bogof: true }} people={6} slices={7} />
    )
    const {
      solution,
      slicesAvailible
    } = wrapper.instance()._calculateSolution(42, { bogof: true })
    expect(solution).toBe('6 Mediums')
    expect(slicesAvailible).toBe(48)
    expect(wrapper.find('#pizzas-required').text()).toBe('6 Mediums')
    expect(wrapper.find('#total-slices').text()).toBe('48 slices')
    expect(wrapper.find('#slices-left-over').text()).toBe('6 left over')
    expect(wrapper.find('#slices-each').text()).toBe('8.00 slices each')
  })
})
