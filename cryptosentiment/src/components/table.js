import React from 'react';
import Row from './row';

function Table({akey, sentiment}) {
    return (
        <>
            <table>
                <thead>
                        <tr>
                        <th>Coin</th>
                        <th>Negative</th>
                        <th>Neutral</th>
                        <th>Positive</th>
                        <th>Compound / Overall</th>
                        </tr>
                    </thead>
                <tbody>
                    <Row sentiment={sentiment[akey]} akey={akey}/>
                </tbody>
            </table>
        </>
    )
}

export default Table;