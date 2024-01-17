let button = document.getElementById('button')

button.addEventListener('click', () => {
    const geradorDeNumeroAleatorio = Math.round(Math.random() * 60)
    console.log('a',geradorDeNumeroAleatorio)



    fetch(`https://akabab.github.io/superhero-api/api/id/${geradorDeNumeroAleatorio}.json`).then((response) => response.json())
    .then((data) => console.log(data))
    console.log('aiai que mina perversa')
})