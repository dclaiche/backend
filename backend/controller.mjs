import express from 'express';
import got from 'got'
import cors from 'cors'

const app = express()

const PORT = 3000;

const corsConfig = {
    origin: '*',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsConfig))

app.use(express.json());

// get data of coin
app.post('/data', (req, res) => {
    let ans = req.body
    sendit(ans).then(final => {
        console.log(final)
        res.send(final);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json('Error request failed');
    })
    
})

const sendit = async (ans) => {
    const data = await got.post('https://gehrinma-microservice.herokuapp.com/api/data', {
        json: ans
    }).json();
    return data;
}

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}...=)`)
})
