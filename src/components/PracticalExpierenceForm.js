import React from 'react';

class PracticalExpierenceForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handleWorkPositionChange = this.handleWorkPositionChange.bind(this);
        this.handleWorkStartDateChange = this.handleWorkStartDateChange.bind(this);
        this.handleWorkEndDateChange = this.handleWorkEndDateChange.bind(this);
        this.handleMainTasksChange = this.handleMainTasksChange.bind(this);
        this.handleSaveWorkExpierence = this.handleSaveWorkExpierence.bind(this);

    }

    
    handleCompanyNameChange(e) {
        this.props.setCompanyName(e.target.value)
    }

    handleWorkPositionChange(e) {
        this.props.setWorkPosition(e.target.value)
    }

    handleWorkStartDateChange(e) {
        this.props.setWorkStartDate(e.target.value)
    }

    handleWorkEndDateChange(e) {
        this.props.setWorkEndDate(e.target.value)
    }

    handleMainTasksChange(e) {
        this.props.setMainTasks(e.target.value)
    }

    handleSaveWorkExpierence(e) {
        this.props.saveWorkExpierence();
        
       const inputsToNulify = Array.from(e.target.parentElement.children).filter((element) => element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA');
       inputsToNulify.forEach(input => input.value = '');

    }


    render() {
        return (
            <div className="category">
                <h3>Practical Expierence</h3>
                <input type="text" placeholder="Company Name" onChange={this.handleCompanyNameChange}></input>
                <input type="text" placeholder="Position" onChange={this.handleWorkPositionChange}></input>
                <input type="text" placeholder="Start Date" onChange={this.handleWorkStartDateChange}></input>
                <input type="tel" placeholder="End Date" onChange={this.handleWorkEndDateChange}></input>
                <textarea type="text" placeholder="Main Tasks" onChange={this.handleMainTasksChange}></textarea>

                <button onClick={this.handleSaveWorkExpierence} className="addBtn">Add</button>
               
            </div>
        )
    }
} 

export default PracticalExpierenceForm;