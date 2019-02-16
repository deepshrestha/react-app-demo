import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const emailPattern = RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

const formValid = function(errors) {
    let valid = true;

    Object.values(errors).forEach(function(value){
        value.length > 0 && (valid = false);
    });

    return valid;
}

class LoginForm extends Component {

    constructor(){
        super();
        this.state = {
            email: null,
            password: null,
            errors: {
                email: "",
                password: ""
            }
        };
        /* this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this); */
    }
    
    onHandleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.errors)){
            console.log(`
                Email: ${this.state.email}
                Password: ${this.state.password}
            `);

            //console.log(this.state.email, this.state.password);

            if ((this.state.email === 'admin@admin.com' && this.state.password === 'deep@123')) {
                this.props.history.push('/home');
            }
            else
                console.log("Login credential is not matched!")
        }
        else 
            console.log("Form is not valid!");
    }

    onHandleChange = e => {
        e.preventDefault();

        const {name, value} = e.target;
        
        let errors = this.state.errors;

        //console.log(name, value);

        //console.log(emailPattern.test(value));

        switch(name){
            case 'email':
                errors.email = !emailPattern.test(value) ? 'Email is invalid!' : '';
                break;
            case 'password':
                errors.password = value.length < 3 ? 'Password should be more than 3 characters' : '';
                break;
            default:
                break;
        }

        this.setState(
            {
                errors, [name]: value
            }, 
            function(){
                console.log(this.state);
            }
        )
    }

    render() {

        const {errors} = this.state;

        return (
            <div className="text-center" style={{margin: "100px"}}>
                <form className="form-signin" onSubmit={this.onHandleSubmit}>
                    <img className="mb-4" src="/src/images/user-login.jpg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input 
                                type="email" 
                                name="email"
                                className="form-control-sm" 
                                placeholder="Email address" 
                                size="40"
                                required
                                autoFocus
                                onChange={this.onHandleChange} />
                            {errors.email.length > 0 && (<div style={{color: "red"}}>{errors.email}</div>)}
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col-md-6 offset-3">
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control-sm" 
                                placeholder="Password" 
                                size="40"
                                required
                                onChange={this.onHandleChange} />     
                                {errors.password.length > 0 && (<div>{errors.password}</div>)}                           
                        </div>
                        
                    </div>
                    <div className="m-2">
                        <button className="btn btn-sm btn-primary">Sign in</button>
                    </div>
                    <p className="mt-4 mb-3 text-muted">&copy; 2019</p>
                </form>
            </div>
        )
    }
}

export default LoginForm;