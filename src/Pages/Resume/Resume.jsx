import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
        
          <TimelineItem
            title="PDP Academy"
            date="2023 — 2024"
            description="Web Development"
          />
          <TimelineItem
            title="Tashkent State University of Oriental Studies"
            date="2021 — 2025"
            description="Politology"
            
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
        <TimelineItem
            company="Saidoff IT Academy"
            title="Frontend Developer"
            date="2024 — Present"
            description="Working with the wider development team. Manage website optimization, speed, and responsiveness."
          />


          <TimelineItem
            company="Chere Water"
            title="Frontend Developer"
            date="2015 — Present"
            description="Developed fully functional e-commerce website. Received positive feedback from team members for proactive problem-solving and strong collaboration skills"
          />
          <TimelineItem
            company="TMII"
            title="Junior Frontend Developer"
            date="2024 January — 2024 May"
            description="Conducted testing and debugging to identify and fix issues in frontend code. Assisted in developing fully functional application platform for student"
          
          />
          <TimelineItem
            company="PDP Academy"
            title="Asistant Frontend Developer"
            date="2023-2024"
            description="Assisted in the development and maintenance of responsive web applications using HTML, CSS, and JavaScript."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">Frontend skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML" value={100} />
          <SkillItem title="CSS" value={90} />
          <SkillItem title="JavaScript" value={80} />
          <SkillItem title="ReactJs" value={70} />
          <SkillItem title="NextJs" value={80} />
          <SkillItem title="VueJs" value={70} />
          <SkillItem title="Tailwind" value={90} />
        </ul>

        <br />

        <h3 className="h3 skills-title">Language skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="English" value={70} />
          <SkillItem title="Russian" value={90} />
          <SkillItem title="Turkish" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;