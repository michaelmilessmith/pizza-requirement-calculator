// @flow

import React from 'react'
import { connect } from 'react-redux'
import pizzaCalculator from '../pizzaCalculator'

type calculateSolutionArgs = {
  slicesNeeded: number,
  bogof: boolean
}

class Result extends React.Component {
  _calculateSolution(pizzas: Object, total: number) {
    const result = []
    if (pizzas.large) {
      result.push(`${pizzas.large} Larges`)
    }
    if (pizzas.medium) {
      result.push(`${pizzas.medium} Mediums`)
    }
    const solution = pizzas.large || pizzas.medium
      ? result.join(', ')
      : 'No Pizza'
    return { solution, slicesAvailible: total }
  }
  render() {
    const { people, slices } = this.props
    const slicesNeeded = people * slices
    const { pizzas, total } = pizzaCalculator({
      slicesNeeded,
      bogof: this.props.bogof
    })
    const { solution, slicesAvailible } = this._calculateSolution(pizzas, total)
    return (
      <div id="result" className="text-center">
        <p id="pizzas-required">
          <span className="lead"><strong>{solution}</strong></span>
        </p>
        <p id="total-slices"><strong>{slicesAvailible}</strong> slices</p>
        <p id="slices-left-over">
          <strong>{slicesAvailible - slicesNeeded}</strong> left over
        </p>
        <p id="slices-each">
          <strong>{(slicesAvailible / people).toFixed(2)}</strong> slices each
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  people: state.people,
  slices: state.slices,
  bogof: state.bogof
})

const component = connect(mapStateToProps)(Result)

export default component
