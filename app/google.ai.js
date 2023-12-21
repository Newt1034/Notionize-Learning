const { config } = require("dotenv");

config();

let youtubeVideoLink = "https://www.youtube.com/watch?v=x-hGIYZj2Rw";

let toSummaryText = `${youtubeVideoLink} -> Summarise this video and put it in the form of bullet points`;

let data = {
    "contents": [
        {
            "parts": [{
                "text": toSummaryText
            }]
        }
    ]
};

let url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env['GOOGLE_AI_KEY']}` 

const createSummary = async() => {

    try { 

        const response = await fetch( url, {
        method:"POST",
        headers: {
            
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
        });

        const respData = await response.json();
        console.log(respData.candidates[0].content.parts);
        

    } catch(error) {
        console.log(error);
        return;
    }
};

createSummary();