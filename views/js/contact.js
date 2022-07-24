async function sendInfo() {
    const mensagem = document.getElementById('mensagem')
    const email = document.getElementById('email')
    const res = document.getElementById('response')
    let infoJSON = {
        msg: mensagem.value,
        email: email.value
    }
    const response = await fetch('https://contesportfolio.herokuapp.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoJSON)
    })

    console.log(response.status)
    if (response.status === 201) {
        res.classList.toggle('hidden')
        res.classList.add('verde')
        mensagem.value = ''
        email.value = ''
        res.innerHTML = "Mensagem enviada com sucesso"
    }
    else {
        res.classList.toggle('hidden')
        res.classList.add('vermelho')
        res.innerHTML = "Nao foi possivel enviar esta mensagem"
    }

    setTimeout(() => {
        res.classList.toggle('hidden')
        res.classList.remove('vermelho')
        res.classList.remove('verde')
    }, 5000);
}

