import React, { Component } from 'react';
import logo from './ss.png';
import './App.css';
import Timer from './Timer';
import NameList from './NameList';
import FormatName from './FormatName';
import NumberList from './NumberList';
import FlavorForm from './FlavorForm';
import Calculator from './Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], itemsNumber: [], text:'', number:'', value: 'Please write Solid Development method.'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmitNumber = this.handleSubmitNumber.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
    this.handleSubmitTextarea = this.handleSubmitTextarea.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="signintext">say hello !</h3>
          <Timer time="0" />
          <NameList items = {this.state.items} />
          <NumberList itemsNumber = {this.state.itemsNumber} />
          <FormatName />
        
          <form className="logininputs" onSubmit = { this.handleSubmit } >
            <label htmlFor="new-name">
              Please input name : 
            </label>
            <input className="inputname" 
              id = "new-name"
              onChange = { this.handleChange }
              value = { this.state.text }
            />
            <button className="btn btn-primary">
              Add #{this.state.items.length + 1}
            </button>
          </form>

          <p/>
          <form className="logininputs" onSubmit = { this.handleSubmitNumber } >
            <label htmlFor="new-number">
              Please input number : 
            </label>
            <input className="inputname" 
              id = "new-number"
              onChange = { this.handleChangeNumber }
              value = { this.state.number }
            />
            <button className="btn btn-primary">
              Add Number #{this.state.itemsNumber.length + 1}
            </button>
          </form>

          <p/>
          <form className="logininputs" onSubmit = { this.handleSubmitTextarea } >
            <label htmlFor="new-textarea">
              Essay: : 
              <textarea value={this.state.value} onChange={this.handleChangeTextarea} />
            </label>
            <input className="inputname" 
              type = "submit"
              value = "Submit"
            />
          </form>
          <FlavorForm />
          <Calculator />
        </header>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.text.length) {
      return;
    }
    const newItem = { 
      text: this.state.text,
      id: Date.now()
    }
    this.setState( state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  handleChangeNumber(e) {
    this.setState({ number: e.target.value });
  }
  handleSubmitNumber(e) {
    e.preventDefault();
    if(!this.state.number.length) {
      return;
    }
    const newItemNumber = { 
      number: this.state.number,
      id: Date.now()
    }
    this.setState( state => ({
      itemsNumber: state.itemsNumber.concat(newItemNumber),
      number: ''
    }));
  }

  handleChangeTextarea(e) {
    this.setState({value: e.target.value});
  }
  handleSubmitTextarea(e) {
    alert('An essay was submitted: ' + this.state.value);
    e.preventDefault();
  }
}

export default App;
