import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Result from '../src/Components/Result'

describe('<Result/>', () => {
  it('loads a div containing four p elements', () => {
    const wrapper = shallow(<Result />)
    expect(wrapper.find('div').length).to.equal(1)
    expect(wrapper.find('div p').length).to.equal(4)
  })

  it('calculates the amount of pizza required', () => {
    const wrapper = shallow(
      <Result pizzaOptions={{ bogof: false }} people={6} slices={7} />
    )
    const { solution, slicesAvailible } = wrapper
      .instance()
      ._calculateSolution(42)
    expect(solution).to.equal('1 Larges, 4 Mediums')
    expect(slicesAvailible).to.equal(42)
    expect(wrapper.find('#pizzas-required').text()).to.equal(
      '1 Larges, 4 Mediums'
    )
    expect(wrapper.find('#total-slices').text()).to.equal('42 slices')
    expect(wrapper.find('#slices-left-over').text()).to.equal('0 left over')
    expect(wrapper.find('#slices-each').text()).to.equal('7.00 slices each')
  })

  it('calculates the amount of pizza required with a bogof offer', () => {
    const wrapper = shallow(
      <Result pizzaOptions={{ bogof: true }} people={6} slices={7} />
    )
    const {
      solution,
      slicesAvailible
    } = wrapper.instance()._calculateSolution(42, { bogof: true })
    expect(solution).to.equal('6 Mediums')
    expect(slicesAvailible).to.equal(48)
    expect(wrapper.find('#pizzas-required').text()).to.equal('6 Mediums')
    expect(wrapper.find('#total-slices').text()).to.equal('48 slices')
    expect(wrapper.find('#slices-left-over').text()).to.equal('6 left over')
    expect(wrapper.find('#slices-each').text()).to.equal('8.00 slices each')
  })
})
