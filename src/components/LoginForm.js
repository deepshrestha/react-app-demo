import React, { useState } from "react";
import { useHistory } from "react-router";

const emailPattern = RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

const formValid = (errors) => {
    let valid = true;

    Object.values(errors).forEach((value) =>{
        value.length > 0 && (valid = false);
    });

    return valid;
}

const LoginForm = () =>  {

    
        let initialState = {
            email: null,
            password: null,
            errors: {
                email: "",
                password: "",
                message: ""
            }
        };
        /* this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this); */
    
    
        const [formState, setFormState] = useState(initialState)
        const history = useHistory();
    
        const onHandleSubmit = (e) => {
    
            e.preventDefault();
    
            if(formValid(formState.errors)){
                console.log(`
                    Email: ${formState.email}
                    Password: ${formState.password}
                `);
    
                console.log(formState.email, formState.password);
    
                if ((formState.email === 'admin@admin.com' && formState.password === 'deep@123')) {
                    // formState.history.push('/home');
                    history.push('/home');
                }
                else{
                    console.log("Login credential is not matched!");
                }
                   
            }
            else 
                console.log("Form is not valid!");
        }
    
        const onHandleChange = (e) => {
            e.preventDefault();
    
            const {name, value} = e.target;
            
            let errors = formState.errors;
    
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
    
            // this.setState(
            //     {
            //         errors, [name]: value
            //     }, 
            //     function(){
            //         console.log(this.state);
            //     }
            // )
            setFormState({
                ...formState,
                [name]: value,
            })
        }
    
            const {errors} = formState;
    
            return (
                <div className="text-center" style={{margin: "80px"}}>
                    <form className="form-signin" onSubmit={onHandleSubmit}>
                        <img className="mb-4" src="/src/images/user-login.jpg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3">Please sign in</h1>
                        <div className="row">
                            <div className="col-md-7 offset-2">
                                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    className="form-control-sm inputText" 
                                    placeholder="Email address" 
                                    size="35"
                                    required
                                    autoFocus
                                    onChange={onHandleChange} />
                                {errors.email.length > 0 && (<div className="inputError">{errors.email}</div>)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7 offset-2">
                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control-sm inputText" 
                                    placeholder="Password" 
                                    size="35"
                                    required
                                    onChange={onHandleChange} />     
                                    {errors.password.length > 0 && (<div className="inputError">{errors.password}</div>)}
                            </div>                        
                        </div>
                        <div className="m-2">
                            <button className="btn btn-md btn-primary">Sign in</button>
                        </div>
                        <p className="mt-4 mb-3 text-muted">&copy; 2019</p>
                    </form>
                </div>
            )}
    
    export default LoginForm;