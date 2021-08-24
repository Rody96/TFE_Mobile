/**
 * 
 * Fonction permettant de récupérer toutes les mesures de température venant du capteur
 * 
 * @returns tableau d'objets sous forme JSON
 */
export function getTemp() {
  const url = "https://rodrigue-projects.site/temperature/all";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}