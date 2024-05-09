import React from 'react';
import './Freshman.css';

function Freshman() {
  return (
    <div>
      <h2>Welcome, Incoming Freshmen!</h2>
      <h3>Program Overview:</h3>
      <p>
        Our Computer Science program offers a comprehensive curriculum designed to prepare students
        for careers in technology and innovation. With a focus on both theoretical concepts and
        practical applications, students gain a solid foundation in computer science principles.
      </p>
      <p>
        Our curriculum covers a wide range of topics, including programming languages, algorithms,
        data structures, software engineering, and more. We also offer elective courses and
        opportunities for hands-on projects to deepen your understanding and explore your interests.
      </p>

      <h3>Course Requirements:</h3>
      <p>
        Incoming freshmen will start with introductory courses in programming, mathematics,
        and computer science fundamentals. As you progress through the program, you'll take
        courses in areas such as:
      </p>
      <ul>
        <li>Data Structures and Algorithms</li>
        <li>Computer Architecture</li>
        <li>Operating Systems</li>
        <li>Database Management</li>
        <li>Software Engineering</li>
        {/* Add more course requirements here */}
      </ul>

      <h3>Faculty:</h3>
      <p>
        Our dedicated faculty members bring a wealth of experience and expertise to the Computer
        Science department. They are committed to providing high-quality education and mentorship
        to our students. Feel free to reach out to them for guidance, research opportunities, or
        academic support.
      </p>
      {/* Include information about faculty members here */}

      {/* Add more sections for student resources, events, campus facilities, etc. */}

    </div>
  );
}

export default Freshman;
