import React, { Component } from 'react';
import Apply from './Apply';
import ContactInformation from './ContactInformation';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class ApplyNow extends Component {
    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        city:'',
        country:'',
        phone:'',
        cv:'',
        coverLetter:'',
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, city, country, phone, cv, coverLetter } = this.state;
        const values = { firstName, lastName, email, city, country, phone, cv, coverLetter }
        
        switch(step) {
            case 1:
                return (
                <Apply
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
                )
            case 2:
                return (
                    <ContactInformation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return (
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 4:
                return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            case 5:
                return (
                    <Success/>

                )
        }
    }
}

export default ApplyNow

