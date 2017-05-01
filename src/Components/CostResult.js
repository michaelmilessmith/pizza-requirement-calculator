// @flow

import React from 'react'

export default class CostResult extends React.Component {
  render() {
    const { people, cost } = this.props
    const costPerPerson = (cost / people).toFixed(2)
    return (
      <div id="cost-result" className="text-center">
        <p id="cost-per-person">
          <span className="lead">
            <strong>{`£${costPerPerson} each`}</strong>
          </span>
        </p>
      </div>
    )
  }
}
