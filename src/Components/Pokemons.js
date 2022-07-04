import {useEffect, useState} from "react";

export const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        if (props.pokemon !== null) {
            setPokemons(props.pokemon)
        }
    }, [props])
    return pokemons !== null ? (
        <>
            {pokemons.results.map((item, i) => (
                <div key={i}>
                    <h1>{pokemons.results[i].name}</h1>
                </div>

            ))}
        </>) : <p>loading</p>


}