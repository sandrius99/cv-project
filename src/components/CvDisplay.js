import React from 'react';
import '../styles/CvDisplay.css';

class CvDisplay extends React.Component {
    render() {
        const name = `${this.props.generalInformation.firstName} ${this.props.generalInformation.lastName}`
        const email = this.props.generalInformation.email;
        const phoneNumber = this.props.generalInformation.phoneNumber;
        const companyName = this.props.practicalExpierence.companyName;
        const position = this.props.practicalExpierence.position;
        const expierenceDate = `${this.props.practicalExpierence.startDate} - ${this.props.practicalExpierence.endDate}`;
        const mainTasks = this.props.practicalExpierence.mainTasks;
        const school = this.props.education.school;
        const studyTitle = this.props.education.studyTitle;
        const studyDate = `${this.props.education.startDate} - ${this.props.education.endDate}`;
        
        const practicalExpierences = this.props.practicalExpierences;
        const educations = this.props.educations;

        return (
            
            <div className="displayCV">
                <div className='generalInfo section'>                  
                    <div className="name">{name}</div>                
                    
                    <div className="details">
                        <span>{phoneNumber}</span>
                        <span>{email}</span>
                    </div>

                </div>
                <div className='experience section'>
                <div className="sectionName">Experience</div>
                {practicalExpierences.map((practicalExpierence) => {
                    const expierenceDate = `${practicalExpierence.startDate} - ${practicalExpierence.endDate}`;
                    return  <div className="experience">
                    <div className='experienceInfo'>
                        <span>{practicalExpierence.position}</span>
                        <span className="companyName">{practicalExpierence.companyName}</span>
                        <span className="mainTasks">{practicalExpierence.mainTasks}</span>
                    </div>
                    <div className='experienceDate'>
                        {expierenceDate}
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
                            {expierenceDate == ' - ' ? '' : expierenceDate}
                        </div>

                    </div>

                    
                </div>
                <div className='education section'>
                <div className="sectionName">Education</div>
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