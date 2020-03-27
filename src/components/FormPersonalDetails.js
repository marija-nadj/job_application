import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';


export class FormPersonalDetalis extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Dialog
                        open="true"
                        fullWidth="true"
                        maxWidth='sm'
                    >
                        <AppBar title="Enter Contact Information" />
                        <TextField
                            placeholder="Enter City"
                            label="City"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                            margin="normal"
                            fullWidth="true"
                        />
                        <br />
                        <TextField
                            placeholder="Enter Country"
                            label="Country"
                            onChange={handleChange('country')}
                            defaultValue={values.country}
                            margin="normal"
                            fullWidth="true"
                        />
                        <br />
                        <TextField
                            placeholder="Enter Phone"
                            label="Phone"
                            onChange={handleChange('phone')}
                            defaultValue={values.phone}
                            margin="normal"
                            fullWidth="true"
                        />
                        <br />
                        <List>
                            <ListItem>
                                <ListItemText primary="Attach CV"/>
                            </ListItem>
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload
                            </Button>
                            <ListItem>
                                <ListItemText primary="Attach Cover Letter" />
                            </ListItem>
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload
                            </Button>
                            <br/>
                            <ListItem>
                                <ListItemText primary="I agree to the Privacy Policy"/>
                            </ListItem>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </List>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >
                            Send Now
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.back}
                        >
                            Back
                        </Button>
                    </Dialog>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetalis
