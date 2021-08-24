/**
 * 
 * Fonction permettant de récupérer toutes les mesures de ppm venant du capteur
 * 
 * @returns tableau d'objets sous forme JSON
 */
export function getPPM() {
  const url = "https://rodrigue-projects.site/airquality/all";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}