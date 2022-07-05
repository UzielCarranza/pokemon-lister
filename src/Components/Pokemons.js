import {useEffect, useState} from "react";
import {getServerData} from "./GetServerData";
import {DataSource} from "./DataSource";
import {PokemonsForms} from "./PokemonsForms";
import './Pokemons.css';


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
                    <DataSource key={pokemons.results[i].name} getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-form/${i}`)} resourceName={"forms"}>
                      <PokemonsForms key={pokemons.results[i].name}/>
                    </DataSource>

            ))}
        </>) : <p>loading</p>


}