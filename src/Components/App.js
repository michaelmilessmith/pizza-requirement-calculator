import Input from './Input';
import Result from './Result';
import React from 'react';

export default class App extends React.Component {
  render() {
  	let solution = "No Pizza",
    		slicesAvailible = 0,
				result = this.props.store.people * this.props.store.slices;
  	for (let key of this.props.options.keys()) {
    	if(key >= result){
      	solution = this.props.options.get(key);
        slicesAvailible = key;
        break;
      }
		}
    return (
      <div>
      <Input handlePeopleChange={this.props.onPeopleChange} handleSlicesChange={this.props.onSlicesChange}/>
            <Result solution={solution} result={result} slices={slicesAvailible} people={this.props.store.people} />

    </div>
    );
  }
}
