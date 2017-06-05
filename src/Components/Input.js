// @flow

import React from 'react'
import { connect } from 'react-redux'
import { updatePeople, updateSlices, toogleBogof } from '../actions'

class Input extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input
                id="number-of-people"
                type="number"
                onChange={e => this.props.onPeopleChange(e.target.value)}
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
                onChange={e => this.props.onSlicesChange(e.target.value)}
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
                  checked={this.props.bogof}
                  onChange={e => this.props.onBogofChange(e.target.value)}
                />
                Buy One Get One Free?
              </label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

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

const component = connect(mapStateToProps, mapDispatchToProps)(Input)

export default component
