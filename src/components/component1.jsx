import React from 'react';

export default class Component1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }
    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}
