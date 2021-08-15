
export function getFanState (id) {
  const url = "https://rodrigue-projects.site/fan/getFanState?id=" + id ;
  fetch(url, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
}).then((response) => response.json())
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.error(error);
    });
};