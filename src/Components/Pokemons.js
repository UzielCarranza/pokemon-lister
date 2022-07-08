import {useEffect, useState} from "react";
import {getServerData} from "../Utils/GetServerData";
import {DataSource} from "../Utils/DataSource";
import {PokemonsForms} from "./PokemonsForms";
import './Pokemons.css';
import {SiPokemon} from "react-icons/si";
import axios from "axios";


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

    const resetSearch = () => {

        document.getElementById("search-input").value = "";
        setSearchValue(null)
    }

    const getNextPage = url => async () => {
        const response = await axios.get(url);
        setPokemons(response.data);
    }

    const getPreviousPage = url => async () => {
        const response = await axios.get(url);
        setPokemons(response.data)

    }
    return pokemons !== null ? (
        <>
            <section className="section">
                <div className="search">
                    <input id="search-input" type="text" onChange={(e) => setSearchByName(e.target.value)}
                           placeholder="Search by name"/>
                    <button onClick={search}>search</button>
                    <button onClick={resetSearch}>reset</button>
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

                            {
                                searchValue.length >= 1 ? (
                                        " "
                                    ) :
                                    (
                                        <div className="no-results">
                                            <SiPokemon style={{fontSize: 800}}/>
                                            <h1>Not found</h1>
                                        </div>
                                    )

                            }
                        </>)

                    :

                    (
                        <>
                            <div className="pokemons-grid">
                                {pokemons.results.map((item, i) => (
                                    <DataSource key={pokemons.results[i].name}
                                                getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-form/${pokemons.results[i].name}`)}
                                                resourceName={"forms"}>
                                        <PokemonsForms key={pokemons.results[i].name}/>
                                    </DataSource>

                                ))}
                            </div>

                            <div className="next-previous--buttons">
                                <button onClick={getPreviousPage(pokemons.previous)}>Previous Page</button>
                                <button onClick={getNextPage(pokemons.next)}>Next Page</button>
                            </div>

                        </>)

                }


            </section>


        </>) : <p>loading</p>


}