import Input from './Input';
import Result from './Result';
import React from 'react';

export default class App extends React.Component {
	constructor() {
    super();
    this.state = {
    	result: 'No Pizza',
      people: 0,
    	slices: 0
    };
  }
  handlePeopleChange(e) {
  console.log(this.state);
  	this.change(e.target.value, this.state.slices);
  }
  handleSliceChange(e) {
  	this.change(this.state.people, e.target.value);
  }
  change(people, slices){
  	this.setState({
    	people: people,
      slices: slices,
    	result: people * slices
    });
  }
  render() {
  	let solution = "No Pizza",
    		slicesAvailible = 0;
  	for (let key of this.props.options.keys()) {
    	if(key >= this.state.result){
      	solution = this.props.options.get(key);
        slicesAvailible = key;
        break;
      }
		}
    return (
      <div>
      <Input handlePeopleChange={(e) => this.handlePeopleChange(e)} handleSliceChange={(e) => this.handleSliceChange(e)}/>
            <Result solution={solution} result={this.state.result} slices={slicesAvailible} people={this.state.people} />

    </div>
    );
  }
}
