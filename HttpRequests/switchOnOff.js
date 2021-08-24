/**
 * 
 * Fonction permettant de changer l'état du ventilateur pour un utilisateur donné
 * 
 * @param {*} fanState état du ventilateur 
 * @param {*} id id de l'utilisateur en base de données
 */
export function postOnOfftoApi (fanState,id) {
    const url = "https://rodrigue-projects.site/fan/updateFanState?fanState="+ fanState +"&id=" + id ;
    fetch(url, {
      method: 'PATCH',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          fanState: fanState,
          id: id
      })
  }).then((response) => response.json())
      .then((json) => {
          console.log(json);
      })
      .catch((error) => {
          console.error(error);
      });
};