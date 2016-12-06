class App extends React.Component {
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

class Input extends React.Component {
  render() {
    return (
    <div>
      <input type="number" onChange={(e) => this.props.handlePeopleChange(e)} placeholder="people"/>
            <input type="number" onChange={(e) => this.props.handleSliceChange(e)} placeholder="slices"/>
      </div>
    );

  }
}

class Result extends React.Component {
  render() {
    return (

      <p>Result: {this.props.solution} for a total of {this.props.slices} slices leaving {this.props.slices - this.props.result} left over or {(this.props.slices / this.props.people).toFixed(2)} slices each</p>);

  }
}

const options = new Map();
options.set(16, "Two Mediums");
options.set(20, "Two Larges");
options.set(32, "Four Mediums");
options.set(36, "Two Larges, Two Mediums");
options.set(40, "Four Larges");
options.set(48, "Six Mediums");
options.set(52, "Two Larges, Four Mediums");
options.set(56, "Four Larges, Two Mediums");
options.set(60, "Six Larges");
options.set(64, "Eight Mediums");
options.set(68, "Two Larges, Six Mediums");
options.set(72, "Four Larges, Four Mediums");
options.set(76, "Six Larges, Two Mediums");
options.set(80, "Eight Larges");



ReactDOM.render(
  <App options={options}/>,
  document.getElementById('container')
);
