import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('<App/>', () => {
  it('renders a <Result/>, <Input/>, <CostInput/> and <CostResult/>', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Connect(Result)').length).toBe(1)
    expect(wrapper.find('Connect(Input)').length).toBe(1)
    expect(wrapper.find('Connect(CostInput)').length).toBe(1)
    expect(wrapper.find('Connect(CostResult)q').length).toBe(1)
  })
})
