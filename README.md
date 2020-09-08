# WatsonSDK_Workshop
![](./images/img0.png)

 Watson SDKs abstract much of the complexity associated with application development. By providing programming interfaces in languages that you already know, they can help you get up and running quickly with IBM Watson services. 
 
 ## Supported SDKs
 The following Watson SDKs are supported by IBM. You can find all SDKs [here](https://github.com/watson-developer-cloud)

 - [Android SDK](https://github.com/watson-developer-cloud/android-sdk)
 - [Go SDK](https://github.com/watson-developer-cloud/go-sdk)
 - [Java SDK](https://github.com/watson-developer-cloud/java-sdk)
 - [Node.js SDK](https://github.com/watson-developer-cloud/node-sdk)
 - [Python SDK](https://github.com/watson-developer-cloud/python-sdk)
 - [Ruby SDK](https://github.com/watson-developer-cloud/ruby-sdk)
 - [.NET SDK](https://github.com/watson-developer-cloud/dotnet-standard-sdk)
 - [Swift SDK](https://github.com/watson-developer-cloud/swift-sdk)
 - [Unity SDK](https://github.com/watson-developer-cloud/unity-sdk)

The Watson SDKs support our 11 Watson cognitive services across nine different programming languages including Node, Java, Python and Go. They enable developers to quickly and easily connect their applications to services like Speech to Text, Discovery and Assistant.

These services can be found in the [API & SDK reference library](https://cloud.ibm.com/docs?tab=api-docs&category=ai) Many AI/ Machine learning services can be created for free using the lite account on IBM Cloud. 

![](./images/img2.png)

 In todays workshop we will walk through creating natural language understanding service service on IBM Cloud. Once we have created this services we will use the Watson SDK to get these services working with Node.js and Python.  

 ## Before You Begin 
 Please create an [IBM Cloud account](https://ibm.biz/WatsonSDK)

## Creating Services 
Once you have created an IBM Cloud Account you can search the cloud catalog for `Lite` and find a service you would like to create.
![](./images/img3.png)
In our case we will be creating a `Natural Language Understanding` and a `Language Translator Service` 
![](./images/img4.png)

Once you have these services created we can get started with using the SDKs 

## Let's Get Started with Node 
 This SDK is tested with Node versions 10 and up.  All official documentation on the Node SDK is found [here](https://github.com/watson-developer-cloud/node-sdk)

###  Installation 
Make a directory and install the ibm-watson node package
```npm install ibm-watson@^5.7.0``` 

### Step 1: Playing with NLU - Instantiate an authenticator 
Let's get started by creating a simple `nlu_example1.js` file 
In this file you will be extracting metadata such as concepts, keywords, categories, sentiment, and emotion from the url `www.nytimes.com`

For more documentation on NLU data extraction please see [Natural Language API DOCs](https://cloud.ibm.com/apidocs/natural-language-understanding?code=node)

```
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
  
  ```

You will have to include the API Key and service URL which you can find in the credentials section of the service you just created : 

![](./images/img5.png)

Once you add your service credentials you should be able to analyze with NLU. 

See[nlu_example1](https://github.com/pmmistry/WatsonSDK_Workshop/blob/master/nlu_example/nlu_example1.js) for more details

### Step 2: Using .env files 
You can also authenticate to a service by automatically allowing credentials to be read from an environment file. 

 
With a credentials file, you just need to put the file in the right place and the SDK will do the work of parsing it and authenticating. You can get this file by clicking the Download button for the credentials in the Manage tab of your service instance.

![](./images/img6.png)

The file downloaded will be called `ibm-credentials.env`. This is the name the SDK will search for and must be preserved unless you want to configure the file path ([see docs](https://github.com/watson-developer-cloud/node-sdk#supplying-credentials)). The SDK will look for your `ibm-credentials.env` file in the following places (in order):

   - Directory provided by the environment variable IBM_CREDENTIALS_FILE
   - Your system's home directory
   - Your current working directory (the directory Node is executed from)

As long as you set that up correctly, you don't have to worry about setting any authentication options in your code. 


Example of using .env file 
```
'use strict';

require('dotenv').config({
  silent: true,
});

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12'
});

const analyzeParams = {
  'url': 'www.ibm.com',
  'features': {
    'categories': {
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

```
See[nlu_example2](https://github.com/pmmistry/WatsonSDK_Workshop/blob/master/nlu_example/nlu_example2.js) for more details


[nlu_example3](https://github.com/pmmistry/WatsonSDK_Workshop/blob/master/nlu_example/nlu_example3.js) also has an example that authenticates using the `ibm-credentials.env` file with text file data . 

Feel free to play around with more NLU API and configurations found in the [Natural Language API DOCs](https://cloud.ibm.com/apidocs/natural-language-understanding?code=node) as well as any other services that are supported by the SDK. Other services can be found in the [API & SDK reference library](https://cloud.ibm.com/docs?tab=api-docs&category=ai) 

![](./images/img7.png)


### Step 3: NLU demo 
Now that you are familiar with 



### Authentication 

### API Docs 


## Let's Get Started with Python 

### Authentication 



## Demos & Resources 


