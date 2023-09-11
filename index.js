const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

app.use('/user' , user)

app.listen(3007 , () => {
    console.log('server is live in port 3007')
})

