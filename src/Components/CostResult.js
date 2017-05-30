// @flow

import React from 'react'

export default class CostResult extends React.Component {
  render() {
    const { people, cost, slices } = this.props
    const costPerPerson = (cost / people).toFixed(2)
    const costPerSlice = (cost / slices).toFixed(2)

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
