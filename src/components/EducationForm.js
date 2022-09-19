import React from "react";

class EducationForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
        this.handleStudyTitleChange = this.handleStudyTitleChange.bind(this);
        this.handleSchoolStartDateChange = this.handleSchoolStartDateChange.bind(this);
        this.handleSchoolEndDateChange = this.handleSchoolEndDateChange.bind(this);
        this.handleSaveSchool = this.handleSaveSchool.bind(this);
        this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    }

    handleSchoolNameChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setSchoolName(e.target.value)
        else this.props.setSchoolName(e.target.value, id)
    }

    handleStudyTitleChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setStudyTitle(e.target.value)
        else this.props.setStudyTitle(e.target.value, id)
    }

    handleSchoolStartDateChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setSchoolStartDate(e.target.value)
        else this.props.setSchoolStartDate(e.target.value, id)
    }

    handleSchoolEndDateChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setSchoolEndDate(e.target.value)
        else this.props.setSchoolEndDate(e.target.value, id)
    }

    handleSaveSchool(e) {
        this.props.saveSchool();
       const inputsToNulify = Array.from(e.target.parentElement.children).filter((element) => element.nodeName === 'INPUT');
       inputsToNulify.forEach(input => input.value = '');
    }

    handleDeleteEducation(e) {
        const id = this.getParentElementID(e.target);
        this.props.deleteEducation(id);
    }

    getParentElementID(element){
        if(element.parentElement.classList.length > 1){
            return element.parentElement.classList[1].substring(element.parentElement.classList[1].length - 1);
        }
        else return -1;
    }

    render() {
        return (<div className="categories">
             {this.props.educations.map((education, index) => {
               return <div className={"category category" + index}>
                <h3>Education</h3>
                <input type="text" placeholder="Company Name" onChange={this.handleSchoolNameChange} value={education.school}></input>
                <input type="text" placeholder="Position" onChange={this.handleStudyTitleChange} value={education.studyTitle}></input>
                <input type="text" placeholder="Start Date" onChange={this.handleSchoolStartDateChange} value={education.startDate}></input>
                <input type="tel" placeholder="End Date" onChange={this.handleSchoolEndDateChange} value={education.endDate}></input>
                <button onClick={this.handleDeleteEducation} className="addBtn">Delete</button>
               
            </div>
            })}
            <div className="category">
                <h3>Education</h3>
                <input type="text" placeholder="School Name" onChange={this.handleSchoolNameChange}></input>
                <input type="text" placeholder="Study Title" onChange={this.handleStudyTitleChange}></input>
                <input type="text" placeholder="Start Date" onChange={this.handleSchoolStartDateChange}></input>
                <input type="text" placeholder="End Date" onChange={this.handleSchoolEndDateChange}></input>
                <button onClick={this.handleSaveSchool} className="addBtn">Add</button>
                
            </div>
            </div>
        )
    }
}

export default EducationForm;