import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function Cards() {
  const API_URL = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';
  const [courses, updateCourses] = useState([]);  

  function getCoursesApi() {
    return new Promise((resolve, reject) => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          resolve(data.communityCategories);
        });
    });
  }

  async function getCourses() {
    const courses = await getCoursesApi();
    console.log(courses);
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
