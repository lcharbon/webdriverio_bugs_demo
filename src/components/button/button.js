// Core
import React, { Component } from 'react';

// Components


class Button extends Component {
    render() {
        return (
            <button
                onClick={ this.props.onClick }
            >
                { this.props.caption }
            </button>
        )
	}
}

export default Button