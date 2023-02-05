import {getFromLocalStorage} from "../Utils/getFromLocalStorage";
import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";
import {PokemonsForms} from "./PokemonsForms";
import {NavLink} from "react-router-dom";

export const Favorites = () => {
    let fav = getFromLocalStorage();

    return fav ? (
        <>
            <div className="search">

                <button>
                    <NavLink style={{padding: 12, textDecoration: 'none'}} to="/"> All pokemons </NavLink>
                </button>
            </div>
            <div className="pokemons-grid">
                {fav.map((item, i) => (
                    <DataSource key={fav[i]}
                                getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-form/${fav[i]}`)}
                                resourceName={"forms"}>
                        <PokemonsForms/>
                    </DataSource>

                ))}
            </div>
        </>
    ) : <p>none</p>
}
