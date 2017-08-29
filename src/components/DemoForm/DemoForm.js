import React, { Component } from 'react';
import './DemoForm.css';

class DemoForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            touched: { email: false, password: false }
        }

        this.onSignUp = this.onSignUp.bind(this);
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validate() }
        );
    }

    validate() {
        const { formErrors } = this.state;

        let fieldValidationErrors = formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';

        passwordValid = this.state.password.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';

        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleInputOnBlur(e) {
        const { touched } = this.state;
        const name = e.target.name;
        this.setState({touched: { ...touched, [name]: true }},
            () => { this.validate() }
        );
    }

    onSignUp() {
        const { touched } = this.state;
        Object.keys(touched).forEach( key => touched[key] = true);
        this.setState({ touched: { ...touched }},
            this.validate()
        );

        if(this.state.formValid) {
            // sign up code here
        }

    }

    render () {
        return (
            <div className="demoForm">
                <h2>Sign up</h2>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control"
                           name="email" value={this.state.email}
                           onChange={(event) => this.handleUserInput(event)}
                           onBlur={(event) => this.handleInputOnBlur(event) }
                    />
                    <p className={ this.state.touched.email ? '' : 'hidden' } >{this.state.formErrors.email}</p>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control"
                           name="password"  value={this.state.password}
                           onChange={(event) => this.handleUserInput(event)}
                           onBlur={(event) => this.handleInputOnBlur(event) }
                    />
                    <p className={ this.state.touched.password ? '' : 'hidden' } >{this.state.formErrors.password}</p>
                </div>
                <button className="btn btn-primary" onClick={this.onSignUp} >
                    Sign up
                </button>
            </div>
        )
    }
}
export default DemoForm;