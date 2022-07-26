
export function getCoursesApi() {
  const API_URL = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';
  return new Promise((resolve, reject) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        resolve(data.communityCategories);
      });
  });
}
