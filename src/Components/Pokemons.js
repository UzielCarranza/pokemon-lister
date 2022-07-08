import {useEffect, useState} from "react";
import {getServerData} from "../Utils/GetServerData";
import {DataSource} from "../Utils/DataSource";
import {PokemonsForms} from "./PokemonsForms";
import './Pokemons.css';
import {SiPokemon} from "react-icons/si";


export const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState(null);
    const [searchValue, setSearchValue] = useState(null)
    const [searchByName, setSearchByName] = useState("");


    useEffect(() => {
        if (props.pokemon !== null) {
            setPokemons(props.pokemon)
        }
    }, [props])


    const search = () => {
        const poke = pokemons.results.filter(value => value.name.toLowerCase().includes(searchByName.toLowerCase()))
        setSearchValue(poke)
    }


    return pokemons !== null ? (
        <>
            <section className="section">
                <div className="search">
                <input type="text" onChange={(e) => setSearchByName(e.target.value)} placeholder="Search by name"/>
                <button onClick={search}>search</button>
                <button onClick={() => setSearchValue(null)}>reset</button>
                </div>


                {searchValue !== null ? (
                        <>
                            <div className="pokemons-grid">
                                {searchValue.map((item, i) => (
                                    <DataSource key={searchValue[i].name}
                                                getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-form/${searchValue[i].name}`)}
                                                resourceName={"forms"}>
                                        <PokemonsForms key={searchValue[i].name}/>
                                    </DataSource>

                                ))}
                            </div>

                        </>)

                    :

                    (
                        <>
                            <div className="pokemons-grid">
                                {pokemons.results.map((item, i) => (
                                    <DataSource key={pokemons.results[i].name}
                                                getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-form/${i}`)}
                                                resourceName={"forms"}>
                                        <PokemonsForms key={pokemons.results[i].name}/>
                                    </DataSource>

                                ))}
                            </div>
                        </>)

                }


            </section>


        </>) : <p>loading</p>


}