import React, {Component} from 'react';

class ErrorPage extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="text-center" style={{margin: "100px"}}>
                <p>Page not found!</p>
                <p>Error: 404</p>
            </div>
        )
    }
}

export default ErrorPage;