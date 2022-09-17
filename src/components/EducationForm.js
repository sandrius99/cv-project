import React from "react";

class EducationForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
        this.handleStudyTitleChange = this.handleStudyTitleChange.bind(this);
        this.handleSchoolStartDateChange = this.handleSchoolStartDateChange.bind(this);
        this.handleSchoolEndDateChange = this.handleSchoolEndDateChange.bind(this);
        this.handleSaveSchool = this.handleSaveSchool.bind(this);

    }

    
    handleSchoolNameChange(e) {
        this.props.setSchoolName(e.target.value)
    }

    handleStudyTitleChange(e) {
        this.props.setStudyTitle(e.target.value)
    }

    handleSchoolStartDateChange(e) {
        this.props.setSchoolStartDate(e.target.value)
    }

    handleSchoolEndDateChange(e) {
        this.props.setSchoolEndDate(e.target.value)
    }

    handleSaveSchool(e) {
        console.log( 'test')
        this.props.saveSchool();
        
       const inputsToNulify = Array.from(e.target.parentElement.children).filter((element) => element.nodeName === 'INPUT');
       inputsToNulify.forEach(input => input.value = '');

    }

    render() {
        return (
            <div className="category">
                <h3>Education</h3>
                <input type="text" placeholder="School Name" onChange={this.handleSchoolNameChange}></input>
                <input type="text" placeholder="Study Title" onChange={this.handleStudyTitleChange}></input>
                <input type="text" placeholder="Start Date" onChange={this.handleSchoolStartDateChange}></input>
                <input type="text" placeholder="End Date" onChange={this.handleSchoolEndDateChange}></input>
                <button onClick={this.handleSaveSchool}>Save</button>
                
            </div>
        )
    }
}

export default EducationForm;