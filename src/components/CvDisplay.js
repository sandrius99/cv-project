import React from 'react';
import '../styles/CvDisplay.css';
import mail from '../assets/mail.png'
import telephone from '../assets/telephone.png'


class CvDisplay extends React.Component {
    render() {
        const name = `${this.props.generalInformation.firstName} ${this.props.generalInformation.lastName}`
        const email = this.props.generalInformation.email;
        const phoneNumber = this.props.generalInformation.phoneNumber;
        const companyName = this.props.practicalExperience.companyName;
        const position = this.props.practicalExperience.position;
        const experienceDate = `${this.props.practicalExperience.startDate} - ${this.props.practicalExperience.endDate}`;
        const mainTasks = this.props.practicalExperience.mainTasks;
        const school = this.props.education.school;
        const studyTitle = this.props.education.studyTitle;
        const studyDate = `${this.props.education.startDate} - ${this.props.education.endDate}`;
        
        const practicalExperiences = this.props.practicalExperiences;
        const educations = this.props.educations;

        return (
            
            <div className="displayCV">
                <div className='generalInfo section'>                  
                    <div className="name">{name}</div>                
                    
                    <div className="details">
                        <div className="detail">
                        <img src={telephone} alt=""></img>
                        <span className="generalInfoSpan">{phoneNumber}</span>
                        </div>
                        <div className="detail">
                        <img src={mail} alt=""></img>
                        <span className="generalInfoSpan">{email}</span>
                        </div>
                        
                    </div>

                </div>
                <div className='experience section'>
                <div className="sectionName">Experience</div>
                {practicalExperiences.map((practicalExperience) => {
                    const experienceDate = `${practicalExperience.startDate} - ${practicalExperience.endDate}`;
                    return  <div className="experience">
                    <div className='experienceInfo'>
                        <span>{practicalExperience.position}</span>
                        <span className="companyName">{practicalExperience.companyName}</span>
                        <span className="mainTasks">{practicalExperience.mainTasks}</span>
                    </div>
                    <div className='experienceDate'>
                        {experienceDate}
                    </div>

                </div>
                })}
                    <div className="experience">
                        <div className='experienceInfo'>
                            <span>{position}</span>
                            <span className="companyName">{companyName}</span>
                            <span className="mainTasks">{mainTasks}</span>
                        </div>
                        <div className='experienceDate'>
                            {experienceDate == ' - ' ? '' : experienceDate}
                        </div>

                    </div>

                    
                </div>
                <div className='education section'>
                <div className="sectionName">Education</div>
                {educations.map((education) => {
                    const experienceDate = `${education.startDate} - ${education.endDate}`;
                    return  <div className="experience">
                    <div className='experienceInfo'>
                        <span>{education.studyTitle}</span>
                        <span className="companyName">{education.school}</span>
                    </div>
                    <div className='experienceDate'>
                        {experienceDate}
                    </div>

                </div>
                })}
                <div className="education">
                    <div className="educationInfo">
                    <span>{studyTitle}</span>
                    <span className="schoolName">{school}</span>
                    </div>
                   <div className="educationDate">
                   <span >{studyDate == ' - ' ? '' : studyDate}</span>
                   </div>
                    
                </div>
                    
                </div>
            </div>
            )
    }
}

export default CvDisplay;