import React, { Component } from 'react';
import './Button.css'; // Tell webpack that Button.js uses these styles

class ButtonApp extends Component {
  
  render() {
    const { name } = this.props;
    const { age } = this.props;

    const user = {
      firstName: 'Ho',
      lastName: 'ten'
    };
    
    const element1 = (
      <div>
        Hello, {formatName(user)}!
        <br></br>
        Age: {age}
        <h3>This is my name:</h3>
      </div>
    );

    // const element2 = (
    //   <h2>{name}</h2>
    // );

    // const element = React.createElement(
    //   'h1',
    //   {className: 'greeting'},
    //   'Hello, world!'
    // );

    // const element4 = (
    //   <h1 className="greeting">
    //     Hello, world!
    //   </h1>
    // );

    // const element5 = {
    //   type: 'h1',
    //   props: {
    //     className: 'greeting',
    //     children: 'Hello, world!'
    //   }
    // };

    // You can use them as regular CSS styles
    return <div className="Button">
      {element1} 
      <h2>{name}</h2>
    </div>
  }
}

  function formatName(user) {
    if (user) {
      return <h1>{user.firstName} - {user.lastName}</h1>;
    } else {
      return <h2>Nothing</h2>;  
    }
  }

export default ButtonApp;