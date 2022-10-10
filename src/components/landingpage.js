import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Landing = () => {
  return (
    <div style={{ width: '100%', margin: 'auto', height: '100%' }}>
      <Grid className='landing-grid '>
        <Cell col={12}>
          <img
            src="../img/profile.jpeg"
            alt='avatar'
            className='avatar-img'
          />

          <div className='banner-text'>
            <h1>Full-satck Web Developer</h1>

            <hr />
            <h2 className='skills-header'> Front-End Skills </h2>
            <p>
              HTML/CSS | HTML5/CSS3 | CSS Grid/Flex | SCSS |
              antd | JavaScript(ES6) | styled component |
              React js | react-hooks | redux
            </p>
            <h2 className='skills-header'> Mobile Application Skills </h2>
            <p>
              react native | styled component | react native UI Toolkit(react native paper , react native elements) | react navigation
            </p>
            <h2 className='skills-header'> Back-End Skills </h2>
            <p>
              nodejs(Express) | Firebase | REST-GraphQL | Git(Github)
            </p>

            <div className='socialss'>
              {/* LinkedIn */}
              <a
                href='https://www.linkedin.com/in/ahmed-esmail-078978214'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-linkedin' />
              </a>

              {/* Github */}
              <a
                href='https://github.com/Elcomi'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fab fa-github' />
              </a>
              <a
                className="small-font"
                style={{ textDecoration: "none" }}
                href="tel:+201024375109"
              >
                <i className="fa fa-phone" aria-hidden="true" />
              </a>
              <a
                className="small-font"
                style={{ textDecoration: "none" }}
                href="mailto:ahmedmagdyb7r@gmail.com?Subject=Hello%20again"
                target="_top"
              >
                <i className="fa fa-envelope" aria-hidden="true" />

              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}




export default Landing;
