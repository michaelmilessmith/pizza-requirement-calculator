// @flow

import React from 'react'
import { connect } from 'react-redux'
import pizzaCalculator from '../pizzaCalculator'

class CostResult extends React.Component {
  render() {
    const { people, cost, slices } = this.props
    const { pizzas, total } = pizzaCalculator({
      slicesNeeded: people * slices,
      bogof: this.props.bogof
    })
    const costPerPerson = (cost / people).toFixed(2)
    const costPerSlice = (cost / total).toFixed(2)

    return (
      <div id="cost-result" className="text-center">
        <p id="cost-per-person">
          <span className="lead">
            <strong>{`£${costPerPerson} each`}</strong>
          </span>
        </p>
        <p id="cost-per-slice"><strong>£{costPerSlice}</strong> per slice</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cost: state.cost,
  people: state.people,
  slices: state.slices,
  bogof: state.bogof
})

const component = connect(mapStateToProps)(CostResult)

export default component
