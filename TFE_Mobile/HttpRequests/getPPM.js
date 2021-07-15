
export function getPPMByID(id) {
  const url = "https://rodrigue-projects.site/airquality/" + id;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}