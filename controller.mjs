import express from 'express';
import got from 'got'

const app = express()

const PORT = 3000;

app.use(express.json());

//create an exercise
app.post('/image', (req, res) => {
    console.log(req.body)
    let ans = req.body
    sendit(ans).then(final => {
        res.send(final);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json('Error request failed');
    })
    
})

const sendit = async (image) => {
    const data = await got.post('https://gehrinma-microservice.herokuapp.com/api/data', {
    json: image
    }).json();
   
    return data;
}

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}...=)`)
})
