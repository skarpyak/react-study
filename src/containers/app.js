import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import SignUp from './sign-up'
import logo from '../logo.svg';
import './App.css';

const App = () => (
    <div>
        <div className="App">
            <div className="App-header">
                <header>
                    <Link className="btn btn-link" to="/">Home</Link>
                    <Link className="btn btn-link" to="/sign-up">Sign Up</Link>
                </header>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React Form Validation Demo</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <main>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/sign-up" component={SignUp} />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default App;