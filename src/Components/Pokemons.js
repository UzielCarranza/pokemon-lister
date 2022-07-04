import {useEffect, useState} from "react";
import {getServerData} from "./GetServerData";
import {DataSource} from "./DataSource";
import {PokemonsForms} from "./PokemonsForms";

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
                    <DataSource getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-form/${i}`)} resourceName={"forms"}>
                      <PokemonsForms/>
                    </DataSource>
                </div>

            ))}
        </>) : <p>loading</p>


}