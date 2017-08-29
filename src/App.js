import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoForm from './components/DemoForm/DemoForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Form Validation Demo</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <DemoForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}export default App;