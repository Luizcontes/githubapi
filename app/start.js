const express = require('express')
const app = express()
const gitRepo = require('../services/gitservice')
const git = new gitRepo('luizcontes')
const cors = require('cors')
const reposRouter = require('../routes/repos')
const contactRouter = require('../routes/contact')

const PORT = process.env.PORT || 8081


app.use(express.json())
app.use(cors())

app.use('/repos', reposRouter)
app.use('/contact', contactRouter)

// erro handler function
app.use((req, res) => {res.status(404).send('Page not found!')})

app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`)
})

