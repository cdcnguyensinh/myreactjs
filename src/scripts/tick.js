import ReactDOM from 'react-dom';
import React, { component, Component } from 'react';

class Tick extends Component {
  
  render() {
    const TickTime1 = () => {
      return <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    }

    const Tick2 = () => {
      return <Clock date={new Date()} />
    }


    return (
      <div>
        <TickTime1 />
        <Tick2 />
      </div>
    )
  }
}

// function TickTime1() {
//     const element = (
// <div>
//   <h1>Hello, world!</h1>
//   <h2>It is {new Date().toLocaleTimeString()}.</h2>
// </div>
//     );
//     ReactDOM.render(element, document.getElementById('root_2'));
//   }

//   function TickTime2() {
//     const componentTick = (
//       <span>
//         <h1>This is tick time</h1>
//         <h2>It is { <Clock date={new Date()} /> } </h2>
//       </span>
//     );

//     ReactDOM.render(componentTick, document.getElementById('root_3'));
//   }

  function Clock(props) {
    return (
      <p>
        <h1>This is tick time!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </p>
    );
  }

//   function GetTickTime() {
//     setInterval(TickTime1, 1000);
//     //setInterval(TickTime2, 1000);
//   }

// //   setInterval(tickTime, 1000);

export default Tick;