// Core
import React, { Component } from 'react';

// Components
import Button from '../../components/button/button';
import Input from '../../components/input/input';

class Home extends Component {
    navigate2Success() {
        this.props.history.push("/success");
    }

    render() {
        return (
            <div>
                <Input 
                    onEnter={ this.navigate2Success.bind(this) }
                />
                <Button
                    caption={ "Click Me"}
                    onClick={ this.navigate2Success.bind(this) }
                />
            </div>
        )
    }
}

export default Home;