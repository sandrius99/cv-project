import React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        if(e.currentTarget.value === '') return
        console.log(e.target.value + " test")
        this.props.onChange(e.currentTarget.value)
    }

    render() {
        
        return (
            <input type="text" placeholder={this.props.placeholder} onChange={this.handleInput}></input>
            )
    }
}

export default FormInput;