// @flow

import React from 'react'

import Input from './Input'
import Result from './Result'
import CostInput from './CostInput'
import CostResult from './CostResult'
import pizzaCalculator from '../pizzaCalculator'

export default class App extends React.Component {
  render() {
    const slicesNeeded = this.props.people * this.props.slices
    const { pizzas, total } = pizzaCalculator({
      slicesNeeded,
      bogof: this.props.bogof
    })
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
          pizzas={pizzas}
          total={total}
        />
        <CostInput handleCostChange={this.props.onCostChange} />
        <CostResult
          cost={this.props.cost}
          people={this.props.people}
          slices={total}
        />
      </div>
    )
  }
}
