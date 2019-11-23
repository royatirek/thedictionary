
// var express = require('express');
// var app = express();
// app.get('/', function( req, res) {
//     res.send("hello");
// })

const getFrequentWords=()=>{
    let url = "https://thedictionary.in/api/frequentWord";
    return fetch(url,
        {
            method: 'POST'
        }).then(function(response) {
                return response.json();
       });
}

export default getFrequentWords;