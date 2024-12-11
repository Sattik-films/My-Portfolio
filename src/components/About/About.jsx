import React from 'react'
import './About.css'
import profile2 from '../../assets/profile2.jpg'

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile2} alt="profileimg" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              autem necessitatibus sunt quam minima optio, nulla quaerat natus
              inventore dolores voluptates voluptas. Necessitatibus, voluptates
              saepe.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              aperiam id nobis in eveniet esse voluptate deserunt, odio impedit
              repellendus. Perspiciatis possimus sed explicabo eaque?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Skill name1</p>
              <div className="progress">
                <hr style={{ width: "50%" }} />
              </div>
            </div>

            <div className="about-skill">
              <p>Skill name2</p>
              <div className="progress">
                <hr style={{ width: "80%" }} />
              </div>
            </div>

            <div className="about-skill">
              <p>Skill name3</p>
              <div className="progress">
                <hr style={{ width: "70%" }} />
              </div>
            </div>

            <div className="about-skill">
              <p>Skill name4</p>
              <div className="progress">
                <hr style={{ width: "30%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>70+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>90+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}


export default About
