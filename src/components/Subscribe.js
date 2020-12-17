import React, { Component } from 'react';

//Using state
class Subscribe extends Component {

    constructor() {
        super();
        this.state = {
            messageContent : 'Welcome visitor!!',
            messageButton : 'SUBSCRIBE'
        }
    }

    changeMessage() {
        this.setState({
            messageContent : 'Thank you for subscribing!',
            messageButton : 'DONE'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.messageContent}</h1>
                <button onClick = { () => this.changeMessage()}>{this.state.messageButton}</button>
            </div>
        )
    }
}

export default Subscribe