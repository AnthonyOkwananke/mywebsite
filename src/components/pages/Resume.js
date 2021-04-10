import React from 'react';
import '../../App.css';
import './Resume.css';
import { ResBackButton } from '../ResBackButton';
import Footer from '../Footer';

export default function Resume() {
    return (
        <>
            <div className="resume-container">
                <div className="resume-content-wrapper">
                <div className="resume-header-row">
                        <div className="header-text-wrapper">
                            <div className="header-title">
                                <h1>Anthony Okwananke</h1>
                                <p className="header-sub-items">anthonyokwananke@gmail.com | C: +1 403.630.6292 | Calgary, Alberta</p>
                                <br />
                                <hr />
                                <div className="summary-wrapper">
                                    <br />
                                    <h2>Summary</h2>
                                    <p>Highly motivated, innovative, and creative software developer with experience in native applications,
                                    <br/>mobile applications, front end, and backend web applications. Knowledgeable in object-oriented 
                                    <br/>programming and various supporting technology frameworks.</p>
                                </div>
                                <br />
                                <hr />
                                <div className="skills-wrapper">
                                    <br />
                                    <h2>Technical Skills</h2>
                                    <div className="skills-row">
                                        <div className="col">
                                            <div className="skills-text-wrapper">
                                                <h3>Programming Languages</h3>
                                                <ul>
                                                    <li>Java  </li>
                                                    <li>C#</li>
                                                    <li>Python</li>
                                                </ul>
                                                <h3>Relational Database</h3>
                                                <ul>
                                                    <li>SQL Server</li>
                                                    <li>MySQL</li>
                                                    <li>Oracle PL/SQL</li>
                                                </ul>
                                                <h3>Version Control</h3>
                                                <ul>
                                                    <li>Git</li>
                                                    <li>GitHub</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="skills-text-wrapper">
                                                <h3>Web Development</h3>
                                                    <ul>
                                                        <li>HTML</li>
                                                        <li>CSS</li>
                                                        <li>JavaScript</li>
                                                        <li>Bootstrap</li>
                                                        <li>React.js</li>
                                                        <li>Node.js</li>
                                                        <li>MongoDB</li>
                                                        <li>ASP.NET</li>
                                                    </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="Experience-wrapper">
                                    <br />
                                    <hr/>
                                    <br />
                                    <h2>Work Experience</h2>
                                    <h3>Independent Software Developer</h3> <small>01/2021 - present</small>
                                    <br />
                                    <br />
                                    <ul>
                                        <li>Troubleshot and debugged an enterprise Java application to ensure it compiles error-free</li>
                                        <li>Designed an application to generate Ti-Hi - number of boxes per layer, and number of layers
                                            <br/>per pallet given the dimension of the storage area of each pallet</li>
                                    </ul>
                                    <br/>
                                    <h3>Fuse Insurance Inc. - Software Developer</h3> <small>06/2020 - 12/2020 Calgary, Alberta</small>
                                    <br />
                                    <br />
                                    <ul>
                                        <li>Conducted in-depth analyses of business systems and technical requirements for the proposed 
                                        <br/>company web application</li>
                                        <li>Conducted in-depth analyses for user experience requirements for proposed web application</li>
                                        <li>Designed and developed a responsive end-to-end web application for the company following  
                                        <br/>business, user, and technical requirements</li>
                                        <li>Collaborated with Tech Leads/Architects to diagnose and resolve blocking issues in software
                                        <br/>development</li>
                                        <li>Performed quality assurance tests, system integration, and user-acceptance testing, ensuring
                                        <br/>smooth and seamless transition from one system component to the other</li>
                                        <li>Wrote unit and integration tests extending the application test coverage from 35% to 75%</li>
                                    </ul>
                                    <br/>
                                    <h4>Accomplishments</h4>
                                    <ul>
                                        <li>Delivered a fully functional web application that gave the business an online presence</li>
                                        <a href="https://fuseinsurance.ca" target="_blank">https://fuseinsurance.ca</a>
                                        <li>Increased client base by 80% since the launch of the website</li>
                                    </ul>
                                    <br/>
                                    <h3>Cygital Technologies - Software Developer</h3> <small>05/2018 - 05/2019 Abuja, Nigeria</small>
                                    <br />
                                    <br />
                                    <ul>
                                        <li>Consulted with client for requirements gathering, project analysis, and progress 
                                        <br/>reporting</li>
                                        <li>Developed web applications using ASP.NET under MVC architecture.</li>
                                        <li>Implemented validation using validation controls, JQuery and JavaScript client side validations</li>
                                        <li>Created database connections to acces database which updated SQL Server tables</li>
                                    </ul>
                                    <br/>
                                    <h3>Institute of Petroleum Engineering, Heriot-Watt University - Research Assistant</h3> <small>11/2014 - 05/2017 Edinburgh, Scotland</small>
                                    <br />
                                    <br />
                                    <ul>
                                        <li>Developed software to calculate hydrate, gas, and water saturations in a three phase hydrate system</li>
                                        <li>Developed research methodologies for methane extraction from natural gas hydrate reservoirs</li>
                                        <li>Developed research proposals in conjunction with the Principal Investigator and stakeholders 
                                        <br/>to attract research grants</li>
                                        <li>Wrote annual technical reports, authored peer-reviewed articles in technical journals and conference 
                                        <br/>papers presented to technical association and conferences</li>
                                    </ul>
                                    <br/>
                                    <h4>Accomplishments</h4>
                                    <ul>
                                        <li>Authored and co-authored 8 peer-reviewed journal articles and conference papers</li>
                                        <li>Attracted international recognition to research group and sponsors through excellent 
                                        <br/>presentations at scientific conferences</li>
                                    </ul>
                                </div>
                                <br/>
                                <hr/>
                                <div className="education-wrapper">
                                <br />
                                    <h2>Education and Professional Development</h2>
                                    <br/>
                                    <h3>Certificate - Object-Oriented Software Development Certificate</h3>
                                    <p>Southern Alberta Institute of Technology (SAIT), Calgary, Alberta</p>
                                    <br/>
                                    <h3>MSc – Petroleum Engineering</h3>
                                    <p>University of Ibadan, Ibadan, Nigeria</p>
                                    <small>(Assessed as equivalent to Canadian 2-year MSc in Petroleum Engineering)</small>
                                    <br/>
                                    <br/>
                                    <h3>B.Tech – Chemical Engineering</h3>
                                    <p>University of Ibadan, Ibadan, Nigeria</p>
                                    <small>(Assessed as equivalent to Canadian 4-year BSc in Chemical Engineering)</small>
                                </div>
                                <br/>
                                <hr/>
                                <div className="certification-wrapper">
                                <br />
                                    <h2>Awards and Certifications</h2>
                                    <br/>
                                    <h3>LinkedIn Learning</h3>
                                    <p>Building Web APIs in ASP.NET Core</p>
                                    <br/>
                                    <h3>IBM Skills Academy</h3>
                                    <p>Application Security Engineer - Explorer Award for Educators 2017 – 2019</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                
                
            </div>
            <div className="res-btn-container">
                <div className="res-btn">
                    <ResBackButton
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Back
                    </ResBackButton>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}