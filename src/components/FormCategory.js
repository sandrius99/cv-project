import React from "react";
import FormInput from "./FormInput";

class FormCategory extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const header = this.props.header;
        
        return (
            <div>
                <h3>{header}</h3>
                <FormInput onChange={this.props.setFirstName} placeholder="First Name"/>
                <FormInput onChange={this.props.setLastName} placeholder="Last Name"/>
                <FormInput onChange={this.props.setEmail} placeholder="Email"/>
                <FormInput onChange={this.props.setPhoneNumber} placeholder="Phone Number"/>

                <div>Result:  {this.props.firstName}</div>
            </div>
            
        )
    }
}

export default FormCategory;