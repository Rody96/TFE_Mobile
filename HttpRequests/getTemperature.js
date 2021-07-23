
export function getTempByID(id) {
  const url = "https://rodrigue-projects.site/temperature/" + id;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}