import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Course from "./course";
import Experience from "./experience";


const Resume = () => {
  return (
    <div style={{ background: "linear-gradient(to right, #536976, #292e49)" }}>
      <Grid>
        <Cell col={4} tablet={12}>
          <div >
            <img
              src="../img/profile1.jpg"
              alt="avatar"
              className="avatar-img"
            />
          </div>

          <h1 style={{ paddingTop: "1em", fontSize: "bold", color: "white" }}>Ahmed Esmail</h1>
          <p style={{ color: "white", fontSize: 20, maxWidth: 470 }}>
            A React Native Developer with tester experience who have a passion for programming, and I am looking forward to enhancing my skills, Ability to quickly learn recent technologies with a passion for mobile app development. I am eager to join a team of talented developers and help build world-class mobile apps
          </p>

        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
          <Education
            startYear={2017}
            endYear={2023}
            schoolName="Computer systems engineering is a discipline that embodies the science and technology of design, construction, implementation, and maintenance of software and hardware components of modern computing systems, computer-controlled equipment, and networks of intelligent devices."
          />
          <h2>Experience</h2>

          <Experience
            startYear={"1/7/2022"}
            endYear={"present"}
            jobName="B7r Store"
            jobDescription=" I'm working as a Junior React Native developer at B7r Store "
          />

          <Experience
            startYear={"22/12/2020"}
            endYear={"30/6/2022"}
            jobName="B7r Store"
            jobDescription=" I worked as a Senior Software Quality Control at B7r Store(ecommerce as a service SAAS) "
          />

          <Experience
            startYear={"1/6/2022"}
            endYear={"1/7/2022"}
            jobName="Freelancer"
            jobDescription=" I worked for a while as a freelancer in UpWork  "
          />

          <h3>Courses</h3>
          <Grid>
            <Course
              link="https://codewithmosh.com/p/the-ultimate-html-css"
              name="The Ultimate HTML/CSS Mastery Series"
            />
            <Course
              link="https://zerotomastery.io/courses/learn-react-native/"
              name="Complete React Native Developer in 2022 [with Hooks]"
            />
            <Course
              link="https://codewithmosh.com/p/the-ultimate-react-native-course"
              name="The Ultimate React Native Series"
            />
            <Course
              link="https://zerotomastery.io/courses/learn-react/"
              name="Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)"
            />
            <Course
              link="https://zerotomastery.io/courses/learn-node-js/"
              name="Complete Node.js Developer in 2022"
            />
            <Course
              link="https://codewithmosh.com/p/ultimate-javascript-series"
              name="The Ultimate JavaScript Series"
            />
            <Course
              link="https://zerotomastery.io/courses/learn-data-structures-and-algorithms/"
              name="Master the Coding Interview: Data Structures + Algorithms"
            />

          </Grid>

          {/* <hr style={{ borderTop: '3px solid #e22947' }} />
          <h2>Skills</h2>
          <Skills skill='HTML/CSS' progress={95} />
          <Skills skill='Reactjs' progress={90} />
          <Skills skill='Nodejs' progress={87} />
          <Skills skill='Wordpress' progress={75} />
          <Skills skill='React Native' progress={60} /> */}
        </Cell>
      </Grid>
    </div>
  );
}




export default Resume;
