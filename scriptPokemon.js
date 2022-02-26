
//"https://pokeapi.co/api/v2/pokemon/"
console.log("Meu Script")
function buscarPokemon() {
    console.log("Minha Função")
    const elementoIdDoPokemon = document.getElementById("nome_pokemon")
    const idPokemon = elementoIdDoPokemon.value
    
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/"+ idPokemon,
        type: "GET",
        success: function(pokemonRetornado) {
            console.log("Deu Certo")
            console.log(pokemonRetornado)
            let elementoImagemDoPokemon = document.getElementById("imagem_pokemon")
            console.log(pokemonRetornado.sprites.front_default)
            elementoIdDoPokemon.src = pokemonRetornado.sprites.front_default
            console.log(pokemonRetornado.name)
           const elementoNome = document.getElementById("resultado_nome")
            elementoNome.innerHTML = pokemonRetornado.name

           

            
        },
        error: function(){
            console.log("Deu Erro")
        }
    })
}