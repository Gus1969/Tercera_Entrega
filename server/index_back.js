const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json())


app.post('/register', (req, res) => {
    console.log(req.body)
    res.json({status : 'ok'})
})
    
app.listen(4000, () => console.log('server is running'));
    
    

