import json
import nltk
from flask import Flask, request, jsonify
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk import tokenize
nltk.download('punkt')
nltk.download('vader_lexicon')



app = Flask(__name__)

@app.route('/')
def homepage():
    return "Welcome to Sentiment Rest API, use /sentiment and pass a string to be analyzed"
 
def get_sentiment(string_input):
    ## Tokenize the words so that they can be read by analyzer ##
    tokenized_words = tokenize.sent_tokenize(string_input)
    sentences = []
    sentences.extend(tokenized_words)

    for sentence in sentences:
        sid = SentimentIntensityAnalyzer()
        print(sentence)
        ss = sid.polarity_scores(sentence)
    return {'sentiment' : ss['compound']}

@app.route('/sentiment', methods=['POST'])
def sentiment():
    sentences = request.json
    print(sentences)
    sentiment_score = get_sentiment(sentences['string_text'])
    response = jsonify(sentiment_score)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

