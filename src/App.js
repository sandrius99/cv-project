
import './App.css';
import React from 'react';
import GeneralInformationForm from "./components/GeneralInformationForm"
import FormCategory from './components/FormCategory';
import EducationForm from './components/EducationForm';
import PracticalExperienceForm from './components/PracticalExperienceForm';
import CvDisplay from './components/CvDisplay';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        generalInformation: {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
        },
        educations: [],
        education: {
          school: '',
          studyTitle: '',
          startDate: '',
          endDate: '',

        },
        practicalExperiences: [],
        practicalExperience: {
          companyName: '',
          position: '',
          startDate: '',
          endDate: '',
          mainTasks: '',
        }   , 
          
      }

      this.setFirstName = this.setFirstName.bind(this);
      this.setLastName = this.setLastName.bind(this);
      this.setEmail = this.setEmail.bind(this);
      this.setPhoneNumber = this.setPhoneNumber.bind(this);

      this.setSchoolName = this.setSchoolName.bind(this);
      this.setStudyTitle = this.setStudyTitle.bind(this);
      this.setSchoolStartDate = this.setSchoolStartDate.bind(this);
      this.setSchoolEndDate = this.setSchoolEndDate.bind(this);
      this.saveSchool = this.saveSchool.bind(this);
      this.deleteEducation = this.deleteEducation.bind(this);
      
      this.setCompanyName = this.setCompanyName.bind(this);
      this.setWorkPosition = this.setWorkPosition.bind(this);
      this.setWorkStartDate = this.setWorkStartDate.bind(this);
      this.setWorkEndDate = this.setWorkEndDate.bind(this);
      this.setMainTasks = this.setMainTasks.bind(this);
      this.saveWorkExperience = this.saveWorkExperience.bind(this);
      this.deleteWorkExperience = this.deleteWorkExperience.bind(this);

     


    }

    setFirstName(firstName) {
      this.setState({
        generalInformation: {
          ...this.state.generalInformation,
          firstName: firstName
        },
      });
    }

    setLastName(lastName) {
      this.setState({
        generalInformation: {
          ...this.state.generalInformation,
          lastName: lastName
        }
      });
    }

    setEmail(email) {
      this.setState({
        generalInformation: {
          ...this.state.generalInformation,
          email: email
        }
      });
    }

    setPhoneNumber(phoneNumber) {
      this.setState({
        generalInformation: {
          ...this.state.generalInformation,
          phoneNumber: phoneNumber
        }
      });
    }

    // School info
    setSchoolName(school, id='none') {
      if(id === 'none'){
      this.setState({
        education: {
          ...this.state.education,
          school: school
        }
      });
    } else {
      this.setState({
        educations: this.editArray(this.state.educations, 'school', id, school)
      });
    }
    }

    setStudyTitle(studyTitle, id='none') {
      if(id === 'none'){
      this.setState({
        education: {
          ...this.state.education,
          studyTitle: studyTitle
        }
      });
    } else {
      this.setState({
        educations: this.editArray(this.state.educations, 'studyTitle', id, studyTitle)
      });
    }
    }
    
    setSchoolStartDate(startDate, id='none') {
      if(id === 'none'){
      this.setState({
        education: {
          ...this.state.education,
          startDate: startDate
        }
      });
    } else {
      this.setState({
        educations: this.editArray(this.state.educations, 'startDate', id, startDate)
      });
    }
    }

    
    setSchoolEndDate(endDate, id='none') {
      if(id === 'none'){
      this.setState({
        education: {
          ...this.state.education,
          endDate: endDate
        }
      });
    } else {
      this.setState({
        educations: this.editArray(this.state.educations, 'endDate', id, endDate)
      });
    }
    }

    saveSchool() {
      this.setState({
        educations: [...this.state.educations, this.state.education],
        education: {
          school: '',
          studyTitle: '',
          startDate: '',
          endDate: '',
        }
      });

    }

    deleteEducation(id) {
      this.setState({
        educations: this.state.educations.filter((education, index) => index != id)
      });
    }

// Experience info
    setCompanyName(companyName, id='none') {
      if(id === 'none'){
      this.setState({
        practicalExperience: {
          ...this.state.practicalExperience,
          companyName: companyName
        }
      });
    } else {
      this.setState({
        practicalExperiences: this.editArray(this.state.practicalExperiences, 'companyName', id, companyName)
      });
    }
    }

    setWorkPosition(position, id='none') {
      if(id === 'none'){
        this.setState({
        practicalExperience: {
          ...this.state.practicalExperience,
          position: position
        }
      });
    } else {
      this.setState({
        practicalExperiences: this.editArray(this.state.practicalExperiences, 'position', id, position)
      });
    }
    }
    
    setWorkStartDate(startDate, id='none') {
      if(id === 'none'){
         this.setState({
        practicalExperience: {
          ...this.state.practicalExperience,
          startDate: startDate
        }
      });
    } else {
      this.setState({
        practicalExperiences: this.editArray(this.state.practicalExperiences, 'startDate', id, startDate)
      });
    }
    }

    
    setWorkEndDate(endDate, id='none') {
      if(id === 'none'){
        this.setState({
        practicalExperience: {
          ...this.state.practicalExperience,
          endDate: endDate
        }
      });
    } else {
      this.setState({
        practicalExperiences: this.editArray(this.state.practicalExperiences, 'endDate', id, endDate)
      });
    }
    }

    setMainTasks(mainTasks, id = 'none') {
      if(id === 'none'){
      this.setState({
        practicalExperience: {
          ...this.state.practicalExperience,
          mainTasks: mainTasks
        }
      });
    } else {
      this.setState({
        practicalExperiences: this.editArray(this.state.practicalExperiences, 'mainTasks', id, mainTasks)
      });
    }



    }

    editArray(arrayName, arrayProperty, id, value){
      return arrayName.map((element, index) => {

        if(index == id){
          element[arrayProperty] = value;
          return element;
        }
        return element;
      })
    }

    saveWorkExperience() {
      this.setState({
        practicalExperiences: [...this.state.practicalExperiences, this.state.practicalExperience],
        practicalExperience: {
          companyName: '',
          position: '',
          startDate: '',
          endDate: '',
          mainTasks: '',
        }
      });

    }

    deleteWorkExperience(id) {
      this.setState({
        practicalExperiences: this.state.practicalExperiences.filter((experience, index) => index != id)
      });
    }

    
  render() {
   
    return <div className="content">
    <div className="header"><span id='headerText'>CV CREATOR</span></div>
    <div className="mainContent">
      <div className="form">
      <GeneralInformationForm  setFirstName={this.setFirstName} setLastName={this.setLastName} setEmail={this.setEmail} setPhoneNumber={this.setPhoneNumber} firstName={this.state.generalInformation.firstName}/> 
       <EducationForm setSchoolName={this.setSchoolName} setStudyTitle={this.setStudyTitle} setSchoolStartDate={this.setSchoolStartDate} setSchoolEndDate={this.setSchoolEndDate} saveSchool={this.saveSchool}
        educations={this.state.educations} deleteEducation={this.deleteEducation}/>
      <PracticalExperienceForm  setCompanyName={this.setCompanyName} setWorkPosition={this.setWorkPosition} setWorkStartDate={this.setWorkStartDate} setWorkEndDate={this.setWorkEndDate} setMainTasks={this.setMainTasks} 
        saveWorkExperience={this.saveWorkExperience} practicalExperiences={this.state.practicalExperiences} deleteWorkExperience={this.deleteWorkExperience}/>
        
      </div>
      <div className="output">
        <CvDisplay  generalInformation={this.state.generalInformation} education={this.state.education} practicalExperience={this.state.practicalExperience} educations={this.state.educations}
         practicalExperiences={this.state.practicalExperiences}/>
        
      </div>  
      
    </div>
    </div>
  }
}


export default App;
