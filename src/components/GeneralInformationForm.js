import React from "react";


class GeneralInformationForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);

        
    }

    handleFirstNameChange(e) {
        this.props.setFirstName(e.target.value)
    }

    handleLastNameChange(e) {
        this.props.setLastName(e.target.value)
    }

    handleEmailChange(e) {
        this.props.setEmail(e.target.value)
    }

    handlePhoneNumberChange(e) {
        this.props.setPhone(e.target.value)
    }

    render() {
        return (
            <div className="category">
                <h3>General Information</h3>
                <input type="text" placeholder="First Name" onChange={this.handleFirstNameChange}></input>
                <input type="text" placeholder="Last Name" onChange={this.handleLastNameChange}></input>
                <input type="mail" placeholder="Email" onChange={this.handleEmailChange}></input>
                <input type="tel" placeholder="Phone Number" onChange={this.handlePhoneNumberChange}></input>
                
            </div>
        )
    }

}

export default GeneralInformationForm;