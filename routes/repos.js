const express = require('express')
const router = express.Router()

const git = require('../services/gitservice.js')

router.get('/', async (req,res) => {
    let repos = await git.getRepos()
    // console.log(repos)
    res.send(repos)
})

module.exports = router