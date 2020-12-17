const express = require('express')
const axios = require('axios')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Node-HK'))

app.get('/api',(req, res) => {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ARKK&outputsize=full&apikey=8PYGCMERXY9SSQ9K').then((response)=>{
        res.send(response.data)
    }).catch(function (error) {
        res.send(error)
      });
})

app.listen(port, () => console.log(`Node-HK port ${port}!`))