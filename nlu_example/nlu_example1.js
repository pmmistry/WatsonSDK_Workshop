const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: "<apikey>",
  }),
  url: "<url>",
});

const analyzeParams = {
  'url': 'www.nytimes.com',
  'features': {
    'categories': {
      'limit': 3,
      'explanation' : true
    },
    'concepts' : {
        'limit' : 3
    },
    'entities': {
        'sentiment': true,
        'limit': 1,
        'emotion': true
      },
      'keywords': {
        'sentiment': true,
        'emotion': true,
        'limit': 3
      }
  }
};

naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });