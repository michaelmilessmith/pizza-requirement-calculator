// @flow

import React from 'react'
import { connect } from 'react-redux'
import { updateCost } from '../actions'

class CostInput extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input
                id="cost"
                type="number"
                onChange={e => {
                  this.props.onCostChange(e.target.value)
                }}
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

const mapDispatchToProps = dispatch => ({
  onCostChange: cost => {
    dispatch(updateCost(cost))
  }
})

const component = connect(null, mapDispatchToProps)(CostInput)

export default component
