const express = require('express')
const path = require('path')


const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'jade')
app.set('views', path.join(__dirname,'public/views'))

app.all('*', (req, res, next) => {
    res.redirect('/')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app is on ${port}`)
})