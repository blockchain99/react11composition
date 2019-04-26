import React from 'react'
import SplitPane from 'react-split-pane';
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color} >
      {props.children}
    </div>
    )
}

/*sometimes you might need multiple “holes” in a component. 
In such cases you may come up with your own convention 
instead of using children  */
function SplitP(props) {
  // return (
  //   <div className="SplitPane">
  //     <div className="SplitPane-left">
  //       {props.left}
  //     </div>
  //     <div className="SplitPane-right">
  //       {props.right}
  //     </div>
  //   </div>
  // );
  return (
    <SplitPane split="vertical" minSize={100} defaultSize={200}>
     <div className="SplitPane-left">
      {props.left}
     </div>
     <div className="SplitPane-right">
      {props.right}
     </div>
    </SplitPane>
  );
}

function Contacts(props) {
  return (
    <div>
      <p>contacts !!</p>
    </div>
  );
}
function Chat(props) {
  return (
    <div>
      <p>Chats !!</p>
    </div>
  );
}
/*React elements,<Contacts /> and <Chat /> are objects, 
so you can pass them as props like any other data.  */
function WelcomeDialog() {
  return (
    <div>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thanks for vising Solid.dev
        </p>
      </FancyBorder>
      <SplitP 
        left={
        <Contacts /> 
        }
        right={
        <Chat /> 
        } />
    </div> 
  );
}

export default WelcomeDialog
