import React from 'react';
import TD from './TD';

function Row({sentiment, akey}) {
    const values = Object.values(sentiment)
    return (
        <>
            <tr>
               <td>{akey}</td> 
              {values.map((value, i) => <TD value={value} key={i}/>)}
            </tr>
        </>
    )
}

export default Row;