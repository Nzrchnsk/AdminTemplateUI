import React, {Component} from 'react';
import Header from "../header";
import ErrorBoundry from "../error-boundry";

export default class App extends Component {

    render() {
        return (
            <ErrorBoundry>
                <div>
                    <Header/>
                    <h1>Hello</h1>
                </div>
            </ErrorBoundry>);
    }
}