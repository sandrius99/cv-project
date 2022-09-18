import React from 'react';
import '../styles/CvDisplay.css';

class CvDisplay extends React.Component {
    render() {
        const name = `${this.props.generalInformation.firstName} ${this.props.generalInformation.lastName}`
        const email = this.props.practicalExpierence.email;
        const phoneNumber = this.props.practicalExpierence.phoneNumber;
        const companyName = this.props.practicalExpierence.companyName;
        const position = this.props.practicalExpierence.position;
        const expierenceDate = `${this.props.practicalExpierence.startDate} - ${this.props.practicalExpierence.endDate}`;
        const mainTasks = this.props.practicalExpierence.mainTasks;
        const school = this.props.education.school;
        const studyTitle = this.props.education.studyTitle;
        const studyDate = `${this.props.education.startDate} - ${this.props.education.endDate}`;

        

        return (
            <div className="displayCV">
                <div className='generalInfo section'>                  
                    <div className="name">{name}</div>                
                    
                    <div className="details">
                        <span>+{phoneNumber}</span>
                        <span>{email}</span>
                    </div>

                </div>
                <div className='experience section'>
                <div className="sectionName">Experience</div>
                    <div className="experience">
                        <div className='expierenceInfo'>
                            <span>{position}</span>
                            <span>{companyName}</span>
                            <span className="mainTasks">{mainTasks}</span>
                        </div>
                        <div className='expierenceDate'>
                            {expierenceDate}
                        </div>

                    </div>

                    
                </div>
                <div className='education section'>
                <div className="sectionName">Education</div>
                <div className="education">
                    <div className="educationInfo">
                    <span>{studyTitle}</span>
                    <span>{school}</span>
                    </div>
                   <div className="educationDate"></div>
                    <span >{studyDate}</span>
                </div>
                    
                </div>
            </div>
            )
    }
}

export default CvDisplay;