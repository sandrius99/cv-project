
import './App.css';
import React from 'react';
import GeneralInformationForm from "./components/GeneralInformationForm"
import FormCategory from './components/FormCategory';
import EducationForm from './components/EducationForm';
import PracticalExpierenceForm from './components/PracticalExpierenceForm';


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
        practicalExpierences: [],
        practicalExpierence: {
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
      
      this.setCompanyName = this.setCompanyName.bind(this);
      this.setWorkPosition = this.setWorkPosition.bind(this);
      this.setWorkStartDate = this.setWorkStartDate.bind(this);
      this.setWorkEndDate = this.setWorkEndDate.bind(this);
      this.setMainTasks = this.setMainTasks.bind(this);
      this.saveWorkExpierence = this.saveWorkExpierence.bind(this);


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
    setSchoolName(school) {
      this.setState({
        education: {
          ...this.state.education,
          school: school
        }
      });
    }

    setStudyTitle(studyTitle) {
      this.setState({
        education: {
          ...this.state.education,
          studyTitle: studyTitle
        }
      });
    }
    
    setSchoolStartDate(startDate) {
      this.setState({
        education: {
          ...this.state.education,
          startDate: startDate
        }
      });
    }

    
    setSchoolEndDate(endDate) {
      this.setState({
        education: {
          ...this.state.education,
          endDate: endDate
        }
      });
    }

    saveSchool() {console.log(this.state.education)
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

// Expierence info
    setCompanyName(companyName) {
      this.setState({
        practicalExpierence: {
          ...this.state.practicalExpierence,
          companyName: companyName
        }
      });
    }

    setWorkPosition(position) {
      this.setState({
        practicalExpierence: {
          ...this.state.practicalExpierence,
          position: position
        }
      });
    }
    
    setWorkStartDate(startDate) {
      this.setState({
        practicalExpierence: {
          ...this.state.practicalExpierence,
          startDate: startDate
        }
      });
    }

    
    setWorkEndDate(endDate) {
      this.setState({
        practicalExpierence: {
          ...this.state.practicalExpierence,
          endDate: endDate
        }
      });
    }

    setMainTasks(mainTasks) {
      this.setState({
        practicalExpierence: {
          ...this.state.practicalExpierence,
          mainTasks: mainTasks
        }
      });
    }

    saveWorkExpierence() {
      console.log(this.state.practicalExpierences)
      this.setState({
        practicalExpierences: [...this.state.practicalExpierences, this.state.practicalExpierence],
        practicalExpierence: {
          companyName: '',
          position: '',
          startDate: '',
          endDate: '',
          mainTasks: '',
        }
      });

    }

    
  render() {
   
    return <div>
      <GeneralInformationForm  setFirstName={this.setFirstName} setLastName={this.setLastName} setEmail={this.setEmail} setPhoneNumber={this.setPhoneNumber} firstName={this.state.generalInformation.firstName}/> 
       <EducationForm setSchoolName={this.setSchoolName} setStudyTitle={this.setStudyTitle} setSchoolStartDate={this.setSchoolStartDate} setSchoolEndDate={this.setSchoolEndDate} saveSchool={this.saveSchool}/>
      <PracticalExpierenceForm  setCompanyName={this.setCompanyName} setWorkPosition={this.setWorkPosition} setWorkStartDate={this.setWorkStartDate} setWorkEndDate={this.setWorkEndDate} setMainTasks={this.setMainTasks} 
        saveWorkExpierence={this.saveWorkExpierence}/>
      
      
      
    </div>
  }
}


export default App;
