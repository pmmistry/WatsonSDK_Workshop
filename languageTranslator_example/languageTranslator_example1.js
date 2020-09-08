'use strict';

require('dotenv').config({
  silent: true,
});

const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

var apikey = process.env.LANGUAGE_TRANSLATOR_IAM_APIKEY;
var url = process.env.LANGUAGE_TRANSLATOR_URL;

const languageTranslator = new LanguageTranslatorV3({
  authenticator: new IamAuthenticator({ apikey: apikey }),
  serviceUrl: url,
  version: '2019-07-12',
});

languageTranslator.translate(
  {
    text: 'A sentence must have a verb',
    source: 'en',
    target: 'ru'
  })
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(err => {
    console.log('error: ', err);
  });

// languageTranslator.identify(
//   {
//     text:
//       'The language translator service takes text input and identifies the language used.'
//   })
//   .then(response => {
//     console.log(JSON.stringify(response.result, null, 2));
//   })
//   .catch(err => {
//     console.log('error: ', err);
//   });

//   languageTranslator.listIdentifiableLanguages().then(languages => {
//       console.log(JSON.stringify(languages.result,null,2));
//   })
//   .catch (err => {
//       console.log('error: ', err);
//   })
