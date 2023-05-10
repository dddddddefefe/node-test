const express = require('express')
var cors = require('cors');
const app = express()
const port = 8080

app.use(cors())

app.get('/user/:id', (req, res) => {
    const q = req.params;
    console.log(q);
    const p = req.body;
    console.log(p);
    res.json({'userid':q.id})
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params;
    if(name == 'dog'){
        res.json({'sound': '멍멍'})
    }else if(name == 'pig'){
        res.json({'sound': '꿀꿀'})
    }else if(name == 'cat'){
        res.json({'sound': '야옹'})
    }else {
        res.json({'sound': '알수없음'})
    }
})

app.listen(8080)