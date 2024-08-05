import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Work Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.workExperience &&
              resumeData.workExperience.map((item, i) => {
                return (
                  <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3>{item.company}</h3>
                      <p className="info">
                        {item.designation} ( {item.role})
                        <span>&nbsp;</span>{" "}
                        <em className="date">
                          {item.startDate}
                        </em>
                      </p>
                      
                      <ul className="job-description">
                        {item.description.map((item ,i) =>{
                          return (
                            <li>
                              {item}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item, i) => {
                return (
                  <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bar">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item, i) => {
                    return (
                      <li key={i}>
                        <img
                          style={{
                            width: "64px",
                            height: "64px",
                            objectFit: "contain"
                          }}
                          src={item.skillImage}
                          alt=""
                        />
                        <div>{item.skillname}</div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
