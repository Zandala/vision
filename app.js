const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Node-HK'))

app.listen(port, () => console.log(`Node-HK port ${port}!`))