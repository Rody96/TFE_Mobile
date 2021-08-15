
export function getHum() {
  const url = "https://rodrigue-projects.site/humidity/all";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}