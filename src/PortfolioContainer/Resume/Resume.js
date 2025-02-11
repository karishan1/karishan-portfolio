import React, {useEffect, useState} from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import '../Resume/Resume.css'


export default function Resume(){
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})



    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.date ? (
            <div className="heading-date">
              {props.date}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
      );
    };




    const resumeBullets = [
        {label: "Education"},
        {label: "University Modules"},
        {label: "Work Experience"},
        {label: "Programming Skills"},
        {label: "Projects"}
    ];

    const educationBackground = [
        {school: 'Queen Mary University of London', desc:'Studying Computer Science Bsc, predicted a First class', date: '2022 - Present'},  
        {school: 'St Dominic sixth form college', desc:'A*A*A in Computer Science, Maths and Physics respectively', date: '2020 - 2022'},
        {school:'Alec Reed Academy', desc:'9 GCSEs with grades 6-9 including 8 in Mathematics and 7 in English language', date: '2016 - 2020'}
    ]

    const uniHighlight = [
      { 
        year: 'First Year Overall - 79.2%', 
        desc: 'Including Modules: Object Oriented Programming (84.6%), Web Tech (78.3%), Computer Systems and Networks (77.1%)' 
      },
      
      { 
        year: 'Second Year Overall – 71.6%', 
        desc: 'Including Modules: Software Engineering (67.2%), Software Engineering Project (72.8%), Graphical User Interfaces (86.3%), Algorithms and Data Structures (76.9%), Internet Protocols and Applications (85.9%)' 
      },
      
      { 
        year: 'Third Year (In Progress)', 
        desc: 'Current Modules: Computational Complexity and Algorithms, Further OOP, Web Programming, Security Engineering, Product Development, Neural Networks and Deep Learning, Dissertation Project' 
      }
    ];
    
    


    const programmingSkills = [
      { skill: 'Java', logoSrc: require('../../assets/Resume/java.png') },
      { skill: 'Python', logoSrc: require('../../assets/Resume/python.png') },
      { skill: 'JavaScript', logoSrc: require('../../assets/Resume/javascript.png') },
      { skill: 'React', logoSrc: require('../../assets/Resume/react.png') },
      { skill: 'HTML', logoSrc: require('../../assets/Resume/html.png') },
      { skill: 'CSS', logoSrc: require('../../assets/Resume/css.png') },
      { skill: 'PHP', logoSrc: require('../../assets/Resume/php.png') },
      { skill: 'SQL', logoSrc: require('../../assets/Resume/sql.png') }
    ];
    const workExperience = [
        {role:'ATK360 - 360 Rental Booth Manager', details:'Manage 360 photobooth service, tailored services to client needs, operated video software, and collaborated with the team to ensure smooth, high-quality event experiences.',date :'Sep 2023 – Present'},
        {role:'Al Murad Tiles - Sales Assistant', details:'Worked with the team to exceed sales targets, created an Excel system to quickly locate tiles, and handled customer inquiries by coordinating with customers, warehouse staff, and head office.', date:'May 2024 – Sep 2024'},
        {role:'UK Developer & Technology Virtual Experience Programme', details:'Completed a Developer and Technology Job Simulation, gaining insight into the Software Development Lifecycle, researching DevOps trends, and creating a presentation on Waterfall vs. Agile methodologies.', date:' April 2024'}
    ]

    const projectDetails = [
        {project:'Fitmind mobile app', details: 'Developed a wellbeing application for FDM employees using React Native for a smooth user experience, integrated Supabase for backend functions, and utilized ExpoGo for streamlined development while collaborating with cross-functional teams to deliver high-quality features',date:"2024", link : 'https://github.com/Roni003/FDM-Wellbeing-App'},
        {project:'Portfolio website', details:'react',date:'2023',link: 'https://www.bbc.co.uk/'}
    ]



    const resumeDetails = [ // resume screens
        <div className = 'resume-screen-container education-container' key = 'education'>

            {educationBackground.map((educationBackground,index)=>(

              <ResumeHeading
              heading = {educationBackground.school}
              subHeading = {educationBackground.desc}
              date = {educationBackground.date? educationBackground.date : ""}
              />
            ))}

        </div>,

        <div className = 'uni-highlight resume-screen-container' key = 'uni-modules'>

          {uniHighlight.map((uniHighlight,index)=>(
              
              <ResumeHeading
              heading = {uniHighlight.year}
              subHeading = {uniHighlight.desc}
              />
          ))}

          
        </div>,

        <div className='resume-screen-container work-experience-container' key = 'work-experience'>
            {workExperience.map((workExperience,index)=>(
              
              <ResumeHeading
              heading = {workExperience.role}
              subHeading = {workExperience.details}
              date = {workExperience.date}
              />
          ))}

        </div>,


        <div className = 'resume-screen-container programming-skills-container' key = "programming-skills">
            {programmingSkills.map((skill,index)=>(
                <div className = 'skill-parent' key = {index}>
                  <span>{skill.skill}</span>
                      <div className = 'heading-bullet'></div>
                    <img src= {skill.logoSrc}/>
                </div>
            ))}
            
        </div>,

        <div className = 'resume-screen-container' key = 'projects'>
          {projectDetails.map((project,index)=>(
            <div className = 'project-parent' key = {index}>

                <ResumeHeading
                heading = {project.project}
                subHeading = {project.details}
                date = {project.date}

                />
                <p><a href = {project.link}>GitHub Link</a></p>
            
            </div>

          ))}
        </div>,

       
    ]


    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };
    
      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >

            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };
    
      const getResumeScreens = () => {
        return (
          <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };


    return(
      <div
      className="resume-container screen-container"
    >
        <div className="resume-content">
          <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
  
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
    )
}