/**
 * 
 * Fonction permettant de récupérer toutes les mesures d'humidité venant du capteur
 * 
 * @returns tableau d'objets sous forme JSON
 */
export function getHum() {
  const url = "https://rodrigue-projects.site/humidity/all";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}