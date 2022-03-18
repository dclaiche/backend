import React from 'react';
import { useHistory, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Table from '../components/table';

function General(){
    const sentiment = {'NFT' : {'bearish' :  0.076, 'neutral' : 0.799, 'bullish' : 0.125, 'compound' :  0.316},
'BTC' :{'bearish' : 0.055, 'neutral' : 0.772, 'bullish' : 0.173, 'compound' :  0.348},
'ETH' :{'bearish' :  0.095, 'neutral' : 0.771, 'bullish' : 0.134, 'compound' :  0.152},
'EPS' :{'bearish' :  0.150, 'neutral' : 0.807, 'bullish' : 0.043, 'compound' : -0.151},
'VR ' :{'bearish' :  0.068, 'neutral' : 0.750, 'bullish' : 0.182, 'compound' : -0.058},
'TIME':{'bearish' :  0.000, 'neutral' : 0.869, 'bullish' : 0.131, 'compound' :  0.214},
'OGN' :{'bearish' :  0.000, 'neutral' : 0.644, 'bullish' : 0.356, 'compound' :  0.726},
'OXY' :{'bearish' :  0.068, 'neutral' : 0.932, 'bullish' : 0.000, 'compound' : -0.276},
'WIN' :{'bearish' :  0.112, 'neutral' : 0.789, 'bullish' : 0.099, 'compound' : -0.920},
'ACH' :{'bearish' :  0.031, 'neutral' : 0.712, 'bullish' : 0.256, 'compound' :  0.962},
'ONE' :{'bearish' :  0.127, 'neutral' : 0.451, 'bullish' : 0.422, 'compound' :  0.848},
'SURE':{'bearish' :  0.188, 'neutral' : 0.669, 'bullish' : 0.143, 'compound' : -0.769},
'JOE' :{'bearish' :  0.000, 'neutral' : 0.877, 'bullish' : 0.123, 'compound' :  0.599},
'ARK' :{'bearish' :  0.027, 'neutral' : 0.856, 'bullish' : 0.117, 'compound' :  0.800}}
const keys = Object.keys(sentiment);

    return (
        <>
        <h1>General sentiment results</h1>
        <p>Sentiment analysis of top picks:</p>
        {keys.map((akey, i) => <Table akey={akey} sentiment={sentiment} key={i}/>)}
        <Link to="/">Return to Homepage</Link>
        </>
    )
}




export default General;