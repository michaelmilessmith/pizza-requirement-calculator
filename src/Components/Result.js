import React from 'react';

export default class Result extends React.Component {
  render() {
    return (
			<div className="text-center">
      <p><span className="lead"><strong>{this.props.solution}</strong></span></p>
			<p><strong>{this.props.slices}</strong> slices</p>
			<p><strong>{this.props.slices - this.props.result}</strong> left over</p>
			<p><strong>{(this.props.slices / this.props.people).toFixed(2)}</strong> slices each</p>
			</div>
		)
  }
}
