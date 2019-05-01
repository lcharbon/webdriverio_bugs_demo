// Core
import React, { Component } from 'react';

// Components


class TestButton extends Component {
    render() {
        return (
            <button
                onClick={ () => { alert("hello world!")}}
            >
            </button>
        )
	}
}

export default TestButton