import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="number" onChange={this.props.handlePeopleChange} placeholder="Number of People" className="form-control"/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="number" onChange={this.props.handleSliceChange} placeholder="Number of Slices per Person" className="form-control"/>
            </div>
          </div>
        </form>
      </div>
    );

  }
}
