import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }



  render() {
    const TickTime1 = () => {
      return <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    }

    const Tick2 = () => {
      return <ClockTick date={new Date()} />
    }

    return (
      <div>
        <TickTime1 />
        <Tick2 />
      </div>
    )
  }
}

function GetTick()
{
  return (
    <div>welcome</div>
  );
}


function ClockTick(props) {
  return (
    <div>
      <h1>This is tick time!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}


export default Clock;