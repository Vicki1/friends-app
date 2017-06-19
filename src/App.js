import React, { Component } from 'react';

// import all required components
import FriendZone from './components/FriendZone';
import FriendBox from './components/FriendBox';

import './index.css';

class App extends Component {
// Constructor to create state and bind functions to this
  // Note that since this is the parent component, we don't need to pass in props
  constructor() {
    super();

    this.state = {
      friends: ['Jasmine', 'Jeremy', 'Bob Saget', 'Dave Chapelle']
    }

    this.addFriend = this.addFriend.bind(this);
  }

// Function that will add the new friend to the state object's friends array
  addFriend(userInput) {
  // Spread operator
    this.setState({
      friends: [...this.state.friends, userInput]
    })

  // Vanilla Javascript
    // let friendCopy = this.state.friends.slice();
    // friendCopy.push(userInput);
    // this.setState({
    //   friends: friendCopy
    // })
  }

// Render method
  render() {

    // JSX
    return (
      <div className="appComponent">
        <h1>App Component</h1>

        {/*
          Rendering the FriendZone component
          - passing it the current friends list on state through as props
        */}
        <div className="friendZone">
          <FriendZone listOfFriends={this.state.friends}/>
        </div>
        
        {/*
          Rendering the FriendBox component
          - passing it the addFriend function as props
        */}
        <div className="friendBox">
          <FriendBox addFriend={this.addFriend}/>
        </div>
      
      </div>
    );
  }
}

export default App;
