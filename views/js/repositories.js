const repo = fetch('https://contesportfolio.herokuapp.com/repos')
        .then(res => res.json())
        .catch(e => console.log(e))

repo.then( value => {
    const title = document.getElementById('title')
    const preview = document.getElementById('preview')
    const webpage = document.getElementById('webpage')
    const repository = document.getElementById('repository')
    title.innerHTML = value.name
    preview.src = value.preview
    webpage.href = value.url
    repository.href = value.repo
    // console.log(value)
}).catch ( err => {
    console.log(err)
})