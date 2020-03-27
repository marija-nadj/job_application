import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { firstName, lastName, email, city, country, phone, cv, coverLetter }} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <Dialog
                open="true"
                fullWidth="true"
                maxWidth='sm'
                >
                <AppBar title="Confirm Contact Information"/>
                <List>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstName}/>
                    </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name" secondary={lastName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="City" secondary={city} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Country" secondary={country} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Phone" secondary={phone} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="CV" secondary={cv} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cover Letter" secondary={coverLetter} />
                            </ListItem>
                </List>
                <br/>
                <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
                >
                Back
                </Button>

                <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
                >
                Confirm & Continue
                </Button>
                </Dialog>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm
