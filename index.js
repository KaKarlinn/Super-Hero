let button = document.getElementById('button')
let conteudo = document.getElementById('conteudo')
let faixa = document.getElementById('faixa')

button.addEventListener('click', () => {
 
    sortearHeroi()
})




const sortearHeroi = () => {
    
    const geradorDeNumeroAleatorio = Math.round(Math.random() * 60)
    console.log('a',geradorDeNumeroAleatorio)

        fetch(`https://akabab.github.io/superhero-api/api/id/${geradorDeNumeroAleatorio}.json`).then((response) => response.json())
        .then((data) => {
            const {name : nomeDosHerois,images} = data
            console.log(nomeDosHerois,images.md)
            faixa.innerText = nomeDosHerois

            let imagemNova = document.createElement("img")
            imagemNova.id = 'imagem'
            imagemNova.src = `${images.md}`

            document.body.appendChild(imagemNova)
            
        }).catch((error) => {
            (error.message)
            
        })
    }
