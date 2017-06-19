import React, { Component } from 'react';

import { connect } from 'react-redux';

class FriendZone extends Component {
    render() {
        return (
            <div>
                <h1>The FriendZone:</h1>
                <ol>
                    {
                        this.props.friendsList.map( (friend, i) => {
                            return <li key={i}>{friend}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        friendsList: state.friends
    }
}

export default connect(mapStateToProps)(FriendZone);