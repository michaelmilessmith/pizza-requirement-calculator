import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

const props = {
  store: {
    people: 0,
    slices: 0
  }
}
describe('<App/>', () => {
  it('renders a <Result/>, <Input/> and <CostInput/> component', () => {
    const wrapper = shallow(<App {...props} />)
    expect(wrapper.find('Result').length).toBe(1)
    expect(wrapper.find('Input').length).toBe(1)
    expect(wrapper.find('CostInput').length).toBe(1)
  })
})
