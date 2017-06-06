// @flow

import React from 'react'
import { connect } from 'react-redux'
import { updatePeople, updateSlices, toogleBogof } from '../actions'

const Input = ({
  bogof,
  onPeopleChange,
  onSlicesChange,
  onBogofChange
}: {
  bogof: boolean,
  onPeopleChange: number => void,
  onSlicesChange: number => void,
  onBogofChange: boolean => void
}) => (
  <div className="panel-body">
    <form>
      <div className="form-group row">
        <div className="col-sm-12">
          <input
            id="number-of-people"
            type="number"
            onChange={e => onPeopleChange(e.target.value)}
            placeholder="Number of People"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-12">
          <input
            id="number-of-slices"
            type="number"
            onChange={e => onSlicesChange(e.target.value)}
            placeholder="Number of Slices per Person"
            className="form-control"
          />
        </div>
      </div>
      <div>
        <div className="text-center">
          <label htmlFor="bogof" className="checkbox-inline">
            <input
              id="bogof"
              type="checkbox"
              checked={bogof}
              onChange={e => onBogofChange(e.target.value)}
            />
            Buy One Get One Free?
          </label>
        </div>
      </div>
    </form>
  </div>
)

const mapStateToProps = state => ({
  bogof: state.bogof
})

const mapDispatchToProps = dispatch => ({
  onPeopleChange: people => {
    dispatch(updatePeople(people))
  },
  onSlicesChange: slices => {
    dispatch(updateSlices(slices))
  },
  onBogofChange: value => {
    dispatch(toogleBogof(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
export { Input }
