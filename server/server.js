const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send([
        {id: 1}
    ])
})



app.listen(5005, () => {
    console.log('Server working: http://localhost:5005');
})