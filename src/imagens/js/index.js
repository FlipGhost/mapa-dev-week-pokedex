//1-clicar no pokemon que quero abrir na listagem ( Adicionar evento de click )

//2-adicionar a classe aberto ao pokemon que eu cliquei na listagem (Usando Id)
//3-retirar a classe aberto do pokemon anterior da listagem (Usando Id)
//4-adicionar a classe ativo ao pokemon que eu cliquei (Usando Id)
//5-retirar a classe ativo ao pokemon anterior


//Vou precisar usar a Listagem e o cartao-pokemon

const listaPokemonSelecionados =document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('cartao-pokemon')

listaPokemonSelecionados.forEach(pokemon =>{
    pokemon.addEventListener('click',()=>{
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const idPokemonSelecionado = pokemon.attributes.id.value
        const cartaoPokemonParaAbrir= document.getElementById('cartao-'+idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')
         pokemonSelecionadoLisgatem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoLisgatem.classList.add('ativo')
    })
})