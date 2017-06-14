import React, { Component } from 'react';

import FriendZone from './components/FriendZone';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: ['Jasmine', 'Jeremy', 'Bob Saget', 'Dave Chapelle']
    }

  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <FriendZone listOfFriends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
