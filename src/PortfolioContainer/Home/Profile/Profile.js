
import React from 'react'
import Typical from 'react-typical'
import './Profile.css'


export default function Profile(){
    return (
        <div className = 'profile-container'>
            <div className = 'profile-parent'>
                <div className = 'profile-details'>
                    <div className = 'colz'>
                        <div className = 'colz-icon'>
                            <a href = 'https://www.linkedin.com/in/karishan-shandrakumar-19805425a/'>
                                <i className = 'fa fa-linkedin-square'></i>
                            </a>
                            <a href = 'https://github.com/karishan1'>
                                <i className = 'fa fa-github-square'></i>
                            </a>
                        </div>
                    </div>

                    <div className = "profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className = "highlighted-text">Karishan</span>
                        </span>
                    </div>

                    <div className = "profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical
                                    loop = {Infinity}
                                    steps = {[
                                        "Enthusiastic Dev", 1000,
                                        "Front-end",1000,
                                        "Back-end",1000
                                    ]}
                                />
                            </h1>
                            <span className = 'profile-role-tagline'>
                                Dedicated 3rd Year Computer Science Student
                            </span>
                        </span>
                    </div>
                    
                    <div className = 'profile-options'>
                        <button className = 'btn primary-btn'>
                            {""}
                            Contact Me{" "}
                        </button>
                        <a href = "RESUME.pdf" download = "Karishan RESUME.pdf">
                            <button className = 'btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>

                    
                </div>
                    <div className='profile-picture'>
                        <div className = 'profile-picture-background'>

                        </div>
                    </div> 
            </div>

        </div>
    )
}