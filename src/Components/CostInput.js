// @flow

import React from 'react'
import { connect } from 'react-redux'
import { updateCost } from '../actions'

const CostInput = ({ onCostChange }: { onCostChange: number => void }) => (
  <div className="panel-body">
    <form>
      <div className="form-group row">
        <div className="col-sm-12">
          <input
            id="cost"
            type="number"
            onChange={e => onCostChange(e.target.value)}
            placeholder="Total cost"
            className="form-control"
          />
        </div>
      </div>
    </form>
  </div>
)

const mapDispatchToProps = dispatch => ({
  onCostChange: cost => {
    dispatch(updateCost(cost))
  }
})

export default connect(null, mapDispatchToProps)(CostInput)
export { CostInput }
