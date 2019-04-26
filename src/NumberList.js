import React, { Component } from 'react'

class NumberList extends Component {
  render() {
    // return (
    //   <ul>
    //     {this.props.itemsNumber.map(itemN => (
    //                 <li key={itemN.id}>Input Number : {itemN.number}</li>
    //              ))}
    //   </ul>
    // );
    return (
      <ul>
        {this.props.itemsNumber.map(itemN => (
                    <li key={itemN.toString()}>Input Number : {itemN.number}</li>
                 ))}
      </ul>
    );
  }
}

export default NumberList;