// Core
import React, { Component } from 'react';
import Button from '../../components/button/button';

class Success extends Component {
    render() {
        return (
            <div>
                <Button
                    onClick={ () => {alert("Hello world")} }
                />
            </div>
        )
    }
}

export default Success;