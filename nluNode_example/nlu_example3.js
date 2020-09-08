require('dotenv').config({
  silent: true,
});

const fs = require('fs');
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');


var file_data = fs.readFileSync('../data/test.txt', 'utf8');

const nlu = new NaturalLanguageUnderstandingV1({
  version: '2018-04-05'
});

nlu.analyze(
  {
    html: file_data, // Buffer or String
    features: {
      concepts: {},
      keywords: {}
    }
  })
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(err => {
    console.log('error: ', err);
  });