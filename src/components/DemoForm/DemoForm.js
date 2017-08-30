import React, { Component } from 'react';
import './DemoForm.css';

class DemoForm extends Component {
    constructor (props) {
        super(props);

        this.onSignUp = this.onSignUp.bind(this);
    }

    handleUserInput (e) {
        const { fieldChange } = this.props;
        const name = e.target.name;
        const value = e.target.value;
        fieldChange({ name, value })
    }

    validate() {
        const { state, formChange } = this.props;
        const { formErrors, email, password } = state;

        let fieldValidationErrors = formErrors;

        let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';

        let passwordValid = password.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';

        if(Object.values(formErrors).toString() !== Object.values(fieldValidationErrors).toString()) {
            formChange({ formErrors: fieldValidationErrors });
        }
    }

    errorClass(error, isTouched) {
        return(error.length && isTouched ? 'has-error' : '');
    }

    handleInputOnBlur(e) {
        const { state, formChange } = this.props;
        const { touched } = state;
        const name = e.target.name;
        formChange({ touched: { ...touched, [name]: true }});
    }

    onSignUp() {
        const { state, formChange } = this.props;
        const { touched, formErrors } = state;
        Object.keys(touched).forEach( key => touched[key] = true);

        const isFormValid = Object.values(formErrors).every(value => !value)

        if(isFormValid) {
            // sign up code here
            alert('form submitted');
        }

        formChange({ touched: { ...touched }})

    }

    render () {
        const {  email, password, formErrors, touched  } = this.props.state;

        this.validate();

        return (
            <div className="demoForm">
                <h2>Sign up</h2>
                <div className={`form-group ${this.errorClass(formErrors.email, touched.email)}`}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control"
                           name="email" value={email}
                           onChange={(event) => this.handleUserInput(event)}
                           onBlur={(event) => this.handleInputOnBlur(event) }
                    />
                    <p className={ touched.email ? '' : 'hidden' } >{formErrors.email}</p>
                </div>
                <div className={`form-group ${this.errorClass(formErrors.password, touched.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control"
                           name="password"  value={password}
                           onChange={(event) => this.handleUserInput(event)}
                           onBlur={(event) => this.handleInputOnBlur(event) }
                    />
                    <p className={ touched.password ? '' : 'hidden' } >{formErrors.password}</p>
                </div>
                <button className="btn btn-primary" onClick={this.onSignUp} >
                    Sign up
                </button>
            </div>
        )
    }
}
export default DemoForm;