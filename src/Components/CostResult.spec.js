import React from 'react'
import { shallow } from 'enzyme'

import { CostResult } from './CostResult'

jest.mock('../pizzaCalculator')

import pizzaCalculator from '../pizzaCalculator'

const props = {
  cost: 36,
  people: 6,
  slices: 18,
  bogof: true
}
describe('<CostResult/>', () => {
  beforeAll(() => {
    pizzaCalculator.mockReturnValue({
      total: 18
    })
  })
  it('calculates how much money each person owes', () => {
    const wrapper = shallow(<CostResult {...props} />)
    expect(wrapper.find('#cost-per-person').text()).toBe('£6.00 each')
  })
  it('calculates how much each slice costs', () => {
    const wrapper = shallow(<CostResult {...props} />)
    expect(wrapper.find('#cost-per-slice').text()).toBe('£2.00 per slice')
  })
})
