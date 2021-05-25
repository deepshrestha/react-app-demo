import React, {Component} from 'react';

class ErrorPage extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="text-center" style={{margin: "100px"}}>
                <h4>
                    <p>Page not found!</p>
                    <p>Error: 404</p>
                </h4>
            </div>
        )
    }
}

export default ErrorPage;