import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Option from '../components/option';
import ReactLoading from "react-loading";


function Homepage({settheRequest}) {
    const history = useHistory();
    const [coin, setCoin] = useState("");
    const freq = {NFT: 17,
    BTC: 14,
    ETH: 12,
    EPS: 5,
    VR: 4,
    TIME: 2,
    OGN: 1,
    OXY: 1,
    WIN: 1,
    ACH: 1,
    ONE: 1,
    SURE: 1,
    JOE: 1,
    ARK: 1}
    const coins = ['NFT', 'BTC', 'ETH', 'EPS', 'VR', 'TIME', 'OGN', 'OXY', 'WIN', 'ACH', 'ONE', 'SURE', 'JOE', 'ARK']
   
      const submit = async () => {
        settheRequest(coin)
        history.push('/specific')
    }

    const gen_sub = async () => {
        history.push('/general', {from: 'Homepage'})
    }
    
    return (
        <>
        <h1>Welcome</h1>
        <p>Number one internet crypto sentiment tracker! One click to see what everyone thinks about that new coin! ;)</p>
        <div>
            <div>
            <select value={coin} onChange={e => setCoin(e.target.value)}>
                <option>Please choose a coin</option>
                {coins.map((coin, i) => <Option coin={coin} key={i}/>)}
            </select>
            <button type="submit" onClick={submit}>Specific Sentiment</button>
            </div>
            <div>
            <button type="submit" onClick={gen_sub}>General Sentiment</button>
            </div>
        </div>
        
        </>
    );
}


export default Homepage;

