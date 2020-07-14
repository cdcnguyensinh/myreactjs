import ReactDOM from 'react-dom';
import React, { component, Component } from 'react';

class Tick extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      current: ""
    };
    console.log("Constructor function");
  }

  componentDidMount() {
      console.log("ComponentDidMount function");
      setInterval(() => {
      this.setState({
        ...this.state,
        current: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        <ClockTick3 current={this.state.current} />
      </div>
    )
  }
}

function ClockTick3(props) {
  return (
    <div>
      <h1>This is tick time 3!</h1>
      <h2>It is {props.current}.</h2>
    </div>
  );
  
}

export default Tick;