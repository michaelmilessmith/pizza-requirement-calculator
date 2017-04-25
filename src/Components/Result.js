import React from 'react';
import pizzaCalculator from "../pizzaCalculator"

export default class Result extends React.Component {
  _calculateSolution(slicesNeeded) {
    const { pizzas, total } = pizzaCalculator({ slicesNeeded, bogof: true });
    const result = [];
    if(pizzas.large) {
      result.push(`${pizzas.large} Larges`);
    }
    if(pizzas.medium) {
      result.push(`${pizzas.medium} Mediums`);
    }
		const solution = pizzas.large || pizzas.medium ? result.join(", ") : "No Pizza";
		return { solution, slicesAvailible: total };
	}
  render() {
    const slicesNeeded = this.props.people * this.props.slices;
    const { solution, slicesAvailible } = this._calculateSolution(slicesNeeded);
    return (
			<div id="result" className="text-center">
      <p id="pizzas-required"><span className="lead"><strong>{solution}</strong></span></p>
			<p id="total-slices"><strong>{slicesAvailible}</strong> slices</p>
			<p id="slices-left-over"><strong>{slicesAvailible - slicesNeeded}</strong> left over</p>
			<p id="slices-each"><strong>{(slicesAvailible / this.props.people).toFixed(2)}</strong> slices each</p>
			</div>
		)
  }
}
