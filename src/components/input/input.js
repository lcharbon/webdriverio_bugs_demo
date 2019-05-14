import React, { Component } from 'react';

class Input extends Component {
    
    constructor() {
        super();

        this.state = {
            value: ""
        }
    }

    onKeyPress(event) {
		let enterHandler = this.props.onEnter;

		if (event.key === 'Enter' && enterHandler) enterHandler();
	}

    handleChange(event) {
        event.preventDefault();

        this.setState({ value: event.target.value });
    }
    
    render() {
        return (
            <input
                onChange={ this.handleChange.bind(this) }
                onKeyPress={ this.onKeyPress.bind(this) }
                value={ this.state.value }
            />
        )
    }
}

export default Input;