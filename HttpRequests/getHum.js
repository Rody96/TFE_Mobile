
export function getHumByID(id) {
  const url = "https://rodrigue-projects.site/humidity/" + id;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}