import axios from "axios";

class GitService {

    constructor() {

    }

    static async getRepos(user) {
        const instance = axios.create({
            method: 'get',
            baseURL: 'http://api.github.com/',
            timeout: 0,
        })

        const usuario = await instance(
            `users/${user}/repos`
        )

        let teste = usuario.data
        const name = teste.map(item => console.log(item.name))
        
        // const repo = usuario.map(item => {console.log(item.name)})

    }

}

export default GitService
