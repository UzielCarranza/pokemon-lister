import {DataSource} from "../../Utils/DataSource";
import {getServerData} from "../../Utils/GetServerData";
import {PokemonsForms} from "../PokemonsForms";
import {SiPokemon} from "react-icons/si";

export const SearchByName = ({name}) => {

    return name.length >= 1 ? (
        <>
            <div className="pokemons-grid">
                {name.map((item, i) => (
                    <DataSource key={name[i].name}
                                getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-form/${name[i].name}`)}
                                resourceName={"forms"}>
                        <PokemonsForms key={name[i].name}/>
                    </DataSource>

                ))}
            </div>
        </>
    ) : (
        <div className="no-results">
            <SiPokemon style={{fontSize: 500}}/>
            <h1>Not found</h1>
        </div>
    )
}

