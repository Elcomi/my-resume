import React from 'react';
import { Cell } from 'react-mdl';

const Course = ({ link, name }) => {
  return (
    <Cell col={12}>
      <a
        style={{ color: "white" }}
        href={link}
        rel='noopener noreferrer'
        target='_blank'
        className='course-link'
      >
        <h5 style={{ margin: '0px' }}>{name}</h5>
      </a>
    </Cell>
  );
}



export default Course;
