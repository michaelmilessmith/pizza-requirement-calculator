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
        <Input
          handlePeopleChange={this.props.onPeopleChange}
          handleSlicesChange={this.props.onSlicesChange}
          handleBogofChange={this.props.onBogofChange}
          bogof={this.props.bogof}
        />
        <Result
          people={this.props.people}
          slices={this.props.slices}
          pizzaOptions={{ bogof: this.props.bogof }}
        />
        <CostInput handleCostChange={this.props.onCostChange} />
        <CostResult cost={this.props.cost} people={this.props.people} />
      </div>
    )
  }
}
