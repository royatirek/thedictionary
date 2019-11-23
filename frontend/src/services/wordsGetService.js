const getJSON = (wordItem) => {
   let url = "https://thedictionary.in/api/"+wordItem;
  return fetch(url, {
             method: 'POST'
        }).then(function(response) {
        return response.json();
     })
  }

  export default getJSON;