import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";
import {PokemonsForms} from "./PokemonsForms";

export const DisplayMainPageOfPokemons = ({pokemons}) => {

    return (
        <div className="pokemons-grid">
            {pokemons.results.map((item, i) => (
                <DataSource key={pokemons.results[i].name}
                            getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-form/${pokemons.results[i].name}`)}
                            resourceName={"forms"}>
                    <PokemonsForms key={pokemons.results[i].name}/>
                </DataSource>

            ))}
        </div>
    )
}