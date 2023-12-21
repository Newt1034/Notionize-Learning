const {config} = require("dotenv");
config();

let videoID = "M_bCVdB1jRY";
const url = `https://youtube.googleapis.com/youtube/v3/captions/${videoID}?key=${process.env['YOUTUBE_API_KEY']} HTTP/1.1`;

const getCaptions = async () =>{
    
    const response = await fetch(url , {
       method : 'GET',
       headers : {
        //'Authorisation-code':process.env['WEB_CLIENT_ID'],
        'Accept' : 'application/json'
       } 
    });

    const data = await response.json();
    console.log(data);


};

getCaptions();

// https://youtu.be/M_bCVdB1jRY?si=bIdDGhuiNg8oGbpV