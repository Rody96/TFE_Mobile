
export function getPPM() {
  const url = "https://rodrigue-projects.site/airquality/all";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}