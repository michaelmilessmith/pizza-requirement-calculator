import React from 'react';

export default class Result extends React.Component {
  _calculateSolution(result, options) {
		let solution = "No Pizza",
    		slicesAvailible = 0;
		for (let key of options.keys()) {
    	if(key >= result){
      	solution = options.get(key);
        slicesAvailible = key;
        break;
      }
		}
		return {solution, slicesAvailible};
	}
  render() {
    const result = this.props.people * this.props.slices;
    const {solution, slicesAvailible} = this._calculateSolution(result, this.props.options);
    return (
			<div id="result" className="text-center">
      <p id="pizzas-required"><span className="lead"><strong>{solution}</strong></span></p>
			<p id="total-slices"><strong>{slicesAvailible}</strong> slices</p>
			<p id="slices-left-over"><strong>{slicesAvailible - result}</strong> left over</p>
			<p id="slices-each"><strong>{(slicesAvailible / this.props.people).toFixed(2)}</strong> slices each</p>
			</div>
		)
  }
}
