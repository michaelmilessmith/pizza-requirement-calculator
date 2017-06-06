// @flow

import React from 'react'
import { connect } from 'react-redux'
import pizzaCalculator from '../pizzaCalculator'

const CostResult = ({
  people,
  cost,
  slices,
  bogof
}: { people: number, cost: number, slices: number, bogof: boolean }) => {
  const { total } = pizzaCalculator({
    slicesNeeded: people * slices,
    bogof
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

const mapStateToProps = state => ({
  cost: state.cost,
  people: state.people,
  slices: state.slices,
  bogof: state.bogof
})

export default connect(mapStateToProps)(CostResult)
export { CostResult }
