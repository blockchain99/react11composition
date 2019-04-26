/*TypeError: Cannot read property 'props' of undefined  */
// import React from 'react'

// function WelcomeDialog(props) {
//   return (
//     <div>
//       welcom dialog by function ! {this.props.msg}
//     </div>
//   )
// }

// export default WelcomeDialog

import React, { Component } from 'react'

class WelcomeDialog1 extends Component {
  render() {
    return (
      <div>
        <p>this is for passing variable with state {this.props.msg} </p>
      </div>
    )
  }
}

export default WelcomeDialog1
