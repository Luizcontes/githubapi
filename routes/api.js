const express = require('express')
const router = express.Router()

const git = require('../services/gitservice.js')

router.get('/', async (req, res) => {
    let repoInfos = await git.getRepos('luizcontes')
    console.log(repoInfos)

    // let image = downloadImage(repoInfos[14].preview)
    res.render('api')
})

module.exports = router