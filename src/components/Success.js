import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Confirm"/>
                    <h1>Your application has been received. </h1>
                    <p> If there is a fit, someone will be getting back to you.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
