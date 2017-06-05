// @flow

import React from 'react'

import Input from './Input'
import Result from './Result'
import CostInput from './CostInput'
import CostResult from './CostResult'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <Result />
        <CostInput />
        <CostResult />
      </div>
    )
  }
}
