import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    addOne() {
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
    }

    addFive() {
        this.addOne()
        this.addOne()
        this.addOne()
        this.addOne()
        this.addOne()
    }

    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick = {() => this.addOne()}>INCREMENT BY 1</button>
                <button onClick = {() => this.addFive()}>INCREMENT BY 5</button>
            </div>
        )
    }
}

export default Counter