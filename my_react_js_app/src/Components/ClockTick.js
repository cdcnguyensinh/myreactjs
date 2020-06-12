import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      current: ""
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        current: new Date().toISOString()
      })
    }, 1000);
  }



  render() {
    // const TickTime1 = () => {
    //   return <div>
    //     <h1>Hello, world!</h1>
    //     <h2>It's {this.state.date.toLocaleDateString()}.</h2>
    //   </div>
    // }

    // const Tick2 = () => {
    //   return <ClockTick date={new Date()} />
    // }



    return (
      <div>
        {/* <TickTime1 />
        <Tick2 /> */}
        <ClockTick3 current={this.state.current} />
      </div>
    )
  }
}

function ClockTick(props) {
  return (
    <div>
      <h1>This is tick time!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function ClockTick3(props) {
  return (
    <div>
      <h1>This is tick time 3!</h1>
      <h2>It is {props.current}.</h2>
    </div>
  );
}


export default Clock;