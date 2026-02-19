const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('c:/Users/jaide/OneDrive/portfolio_website/Jaideep_1/Jaideep_portfolio/src/assets/Jaideep141999_11th_FEB_Resume.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
