// @flow

import React from 'react'

export default class CostInput extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input
                id="cost"
                type="number"
                onChange={e => this.props.handleCostChange(e.target.value)}
                placeholder="Total cost"
                className="form-control"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
