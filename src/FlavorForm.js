import React, { Component } from 'react'
import Select from 'react-select';
// import FavFormShow from './FavFormShow';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
const options2 = [
    { value: 'chocolate' },
    { value: 'strawberry'},
    { value: 'vanilla' }
  ];

class FlavorForm extends Component {
  constructor(props) {
    super(props); 
    // if {selectedObj: null}, when not input & submit cause error !
    this.state = {  selectedObj: { value: 'chocolate', label: 'Chocolate' } };  //obj for optionChanged

    this.handleSubmit = this.handleSubmit.bind(this);
    this.optionChanged = this.optionChanged.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    }
// handleChange(e) {
//     this.setState( {value : e.target.value} )
//     console.log(e.target.value)
// }
    
handleSubmit(e) {
    e.preventDefault();
//selectedObj is array entity obj(options) consist of {value, label} 
    // const newItem = { 
    //     selectedObj: this.state.selectedObj,
    //   }
//options(obj, slectedObj)-> need to break down to value -> selectedObj.value
   alert('Your favorite flavor is: ' + this.state.selectedObj.value );
   /* below lines makes no difference  */
//    this.setState( state => ({
//        selectedObj: state.selectedObj
//    }))
   console.log("handleSubmit: "+this.state.selectedObj.value);
}
   
optionChanged = value => {  //this value is changed one.(obj)
    this.setState({ selectedObj: value })
    console.log(value)
  }
  
render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <Select value={this.state.value} onChange={this.optionChanged}
            options={options}
          />
        </label>   
        <input type="submit" value="Submit" />
      </form>   
      </div>  
    );
  }
}

export default FlavorForm;


