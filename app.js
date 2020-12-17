const express = require('express')
const axios = require('axios')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Node-HK'))

app.get('/api',(req, res) => {
    axios.get('https://1155308185149296.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/app/api/').then((response)=>{
        res.send(response.data)
    }).catch(function (error) {
        res.send(error)
      });
})

app.listen(port, () => console.log(`Node-HK port ${port}!`))