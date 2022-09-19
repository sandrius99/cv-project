import React from 'react';

class PracticalExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handleWorkPositionChange = this.handleWorkPositionChange.bind(this);
        this.handleWorkStartDateChange = this.handleWorkStartDateChange.bind(this);
        this.handleWorkEndDateChange = this.handleWorkEndDateChange.bind(this);
        this.handleMainTasksChange = this.handleMainTasksChange.bind(this);
        this.handleSaveWorkExperience = this.handleSaveWorkExperience.bind(this);
        this.handleDeleteWorkExperience = this.handleDeleteWorkExperience.bind(this);

    }

    
    handleCompanyNameChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setCompanyName(e.target.value)
        else  this.props.setCompanyName(e.target.value, id)
    }

    handleWorkPositionChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setWorkPosition(e.target.value)
        else  this.props.setWorkPosition(e.target.value, id)
    }

    handleWorkStartDateChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setWorkStartDate(e.target.value)
        else  this.props.setWorkStartDate(e.target.value, id)
    }

    handleWorkEndDateChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setWorkEndDate(e.target.value)
        else  this.props.setWorkEndDate(e.target.value, id)
    }

    handleMainTasksChange(e) {
        const id = this.getParentElementID(e.target);
        if(id === -1) this.props.setMainTasks(e.target.value)
        else this.props.setMainTasks(e.target.value, id)
    }

    handleSaveWorkExperience(e) {
        this.props.saveWorkExperience();
        
       const inputsToNulify = Array.from(e.target.parentElement.children).filter((element) => element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA');
       inputsToNulify.forEach(input => input.value = '');

    }

    handleDeleteWorkExperience(e) {
      
        const id = this.getParentElementID(e.target);
        this.props.deleteWorkExperience(id);
    }

    getParentElementID(element){
        if(element.parentElement.classList.length > 1){
            return element.parentElement.classList[1].substring(element.parentElement.classList[1].length - 1);
        }
        else return -1;
    }


    render() {
        
        return (<div className="categories">
            {this.props.practicalExperiences.map((experience, index) => {
               return <div className={"category category" + index}>
                <h3>Practical Experience</h3>
                <input type="text" placeholder="Company Name" onChange={this.handleCompanyNameChange} value={experience.companyName}></input>
                <input type="text" placeholder="Position" onChange={this.handleWorkPositionChange} value={experience.position}></input>
                <input type="text" placeholder="Start Date" onChange={this.handleWorkStartDateChange} value={experience.startDate}></input>
                <input type="tel" placeholder="End Date" onChange={this.handleWorkEndDateChange} value={experience.endDate}></input>
                <textarea type="text" placeholder="Main Tasks" onChange={this.handleMainTasksChange} value={experience.mainTasks}></textarea>

                <button onClick={this.handleDeleteWorkExperience} className="addBtn">Delete</button>
               
            </div>
            })}
            <div className="category">
                <h3>Practical Experience</h3>
                <input type="text" placeholder="Company Name" onChange={this.handleCompanyNameChange}></input>
                <input type="text" placeholder="Position" onChange={this.handleWorkPositionChange}></input>
                <input type="text" placeholder="Start Date" onChange={this.handleWorkStartDateChange}></input>
                <input type="tel" placeholder="End Date" onChange={this.handleWorkEndDateChange}></input>
                <textarea type="text" placeholder="Main Tasks" onChange={this.handleMainTasksChange}></textarea>

                <button onClick={this.handleSaveWorkExperience} className="addBtn">Add</button>
               
            </div>
            </div>
        )
    }
} 

export default PracticalExperienceForm;