export const Pokemons = (props) => {
    console.log(props)

    return props ? (
        <div>
            <h1>{props.pokemon.forms[0].name}</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png" alt="ditto"/>
        </div>
    ) : ""

}