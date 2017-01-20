import Input from './Input';
import Result from './Result';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
      	<Input handlePeopleChange={this.props.onPeopleChange} handleSlicesChange={this.props.onSlicesChange}/>
        <Result options={this.props.options} people={this.props.people} slices={this.props.slices} />
    </div>
    );
  }
}
