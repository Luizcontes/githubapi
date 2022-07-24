const express = require('express')
const router = express.Router()
const git = require('../services/gitservice.js')

router.get('/', async (req, res) => {
    // let repoInfos = await git.getRepos('luizcontes')
    // console.log(repoInfos)
    res.render('index')
})

module.exports = router