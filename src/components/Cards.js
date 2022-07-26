import { useEffect, useState } from 'react';
import './Cards.css';
import Card from './Card';
import { getCoursesApi } from '../services/courses';

function Cards() {
  const [courses, updateCourses] = useState([]);  

  async function getCourses() {
    const courses = await getCoursesApi();
    updateCourses(courses);
  }

  useEffect(() => {
    console.log('consumir una api');
    getCourses();
  }, []);

  return (
    <div className="cards"> 
      {
        courses.map(course => {
          return <Card 
            name={course.name}
            icon={course.icon}
            users={course.users}
            background={course.background}
            totalQuizzes={course.totalQuizzes}
            key={course.id}
          />
        })
      }
    </div>
  );
}

export default Cards;
