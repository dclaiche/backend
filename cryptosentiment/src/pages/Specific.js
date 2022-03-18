import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Table from '../components/table';
import { useState, useEffect } from 'react';

function Specific({theRequest}) {
    const [done, setDone] = useState(undefined);
    const [coin, setCoin] = useState([]);
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
    const arr = {'NFT': 'Non Fundgible Token', 'BTC': 'Bitcoin', 'ETH': 'Etherium', 'EPS': 'Ellipsis', 'VR' : 'victoria', 'TIME': 'wonderland', 'OGN' : 'Origin', 'OXY' : 'Oxygen'}
    const title_coin = arr[theRequest]
    let coin_to_get_data = {
        method : "POST",
        body : JSON.stringify({"title" : title_coin}),
        headers : {'Content-Type': 'application/json'}
    }

    const submit = async () => {
        const response = await fetch('/data', {method:'POST', body: coin_to_get_data})
        const author = await response.json()
        console.log(author['author'])
        setCoin(author['author'])

    }

    return (
        <>
        <h1>Specific Breakdown</h1>
        <p>Here is the data for {theRequest}</p>
        <Table akey={theRequest} sentiment={sentiment}/>
        <div>
            <p>Click here to see the author of {theRequest}</p>
            <button type="submit" onClick={submit}>Get Author</button>
        </div>
        
        <Link to="/">Return to Homepage</Link>
        </>
    )
}


export default Specific;