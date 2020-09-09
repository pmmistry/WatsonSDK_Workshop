import json
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_watson.natural_language_understanding_v1 import Features, EntitiesOptions, KeywordsOptions


service = NaturalLanguageUnderstandingV1(
    version='2018-03-16')
service.set_service_url('https://gateway.watsonplatform.net/natural-language-understanding/api')

response = service.analyze(
    text='Bruce Banner is the Hulk and Bruce Wayne is BATMAN! '
    'Superman fears not Banner, but Wayne.',
    features=Features(entities=EntitiesOptions(),
                      keywords=KeywordsOptions())).get_result()

print(json.dumps(response, indent=2))