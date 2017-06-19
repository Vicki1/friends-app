import React, { Component } from 'react';
import FriendZone from './components/FriendZone';
import FriendBox from './components/FriendBox';

import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: ['get some friends from redux']
    }
    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(userInput) {
    this.setState({
      friends: [...this.state.friends, userInput]
    })
  }

  render() {

    // JSX
    return (
      <div className="appComponent">
        <h1>App Component</h1>
        <div className="friendZone">
          <FriendZone />
        </div>
        
        <div className="friendBox">
          <FriendBox addFriend={this.addFriend}/>
        </div>
      
      </div>
    );
  }
}

export default App;
