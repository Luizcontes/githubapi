const axios = require('axios')
const e = require('express')

class GitService {

    constructor(user) {
        this.infos = GitService.getRepos(user)
    }

    getRepos() {
        return this.infos
    }

    getRepo() {
        console.log(this.infos[14])
        // return this.infos[14]
    }

    static async getRepos(user) {
        // const instance = axios.create({
        //     method: 'get',
        //     baseURL: 'http://api.github.com/',
        //     timeout: 0,
        // })

        // const usuario = await instance(
        //     `users/${user}/repos`
        // ).catch((e) => console.log(e))

        // if (usuarios) {
        //     let infos = await usuario.data.map(repo => {
        //         let info = {
        //             name: repo.name,
        //             url: repo.html_url,
        //             repo: repo.description,
        //             preview: `https://raw.githubusercontent.com/${user}/${repo.name}/main/preview.gif`
        //         }

        //         return info
        //     })
        // }

        return {
            name: 'teste-frontend',
            url: 'https://techprobem.herokuapp.com/',
            repo: 'https://github.com/Luizcontes/teste-frontend',
            preview: 'https://raw.githubusercontent.com/Luizcontes/teste-frontend/main/preview.gif'
        }
    }
}

module.exports = GitService