const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('<html><body><h1 style="background:red">Hello Aaron</h1></body></html>')
})

app.get('/api/:username/:id',(req,res) => {

    let id = req.params.id
    let username  = req.params.username

    res.send(`
        <html>
            <body>
                <h1 style="background:red">The user id is ${id} and the username is ${username}</h1>
            </body>
        </html>
        `)

    // res.send({
    //     name:'Francis',
    //     lastname:'Jones'
    // });
})


//http://localhost:3000/api/car?brand=ford&model=fiesta
app.get('/api/car', (req,res)=>{
    let brand = req.query.brand;
    let model = req.query.model;

    res.send({
        brand,
        model
    })
}) 



const port = process.env.PORT || 3000

app.listen(port);

