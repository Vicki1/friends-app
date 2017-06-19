import React, { Component } from 'react';

export default class FriendBox extends Component {
    // Constructor to create initial state, and bind functions to this
    constructor(props) {
        super(props);

        this.state = {
            userInput: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    // Function that updates the value of userinput
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
        console.log(this.state.userInput)
    }

    render() {
        // Destructuring
        const {
            addFriend
        } = this.props;

        // JSX
        return (
            <div>
                <h3>Add a new friend:</h3>
                <input type="text" onChange={this.handleChange}/>
                <button className="btn btn-primary" onClick={ () => addFriend(this.state.userInput) }>Click me</button>
            </div>
        );
    }
}

