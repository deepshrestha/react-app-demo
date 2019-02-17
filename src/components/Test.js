import React from 'react';

class Test extends React.Component {
    constructor(){
        super();
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
       this.setState(
           {
               message: 'Hello World!'
           }
       );       
    }

    render(){
        console.log(this.state.message);
        return (
            <div style={{padding: 100}}>
                {this.state.message}
            </div>
        )
    }
}

export default Test;