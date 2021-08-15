
export function getTemp() {
  const url = "https://rodrigue-projects.site/temperature/all";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}