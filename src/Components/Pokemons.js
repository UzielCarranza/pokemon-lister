import {useEffect, useState} from "react";
import {getServerData} from "../Utils/GetServerData";
import {DataSource} from "../Utils/DataSource";
import {PokemonsForms} from "./PokemonsForms";
import './Pokemons.css';
import {SiPokemon} from "react-icons/si";
import axios from "axios";
import {MdArrowBackIosNew, MdNavigateNext} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {paginationByOffsets, PaginationByOffsets} from "./paginationByOffsets";


export const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState(null);
    const [searchValue, setSearchValue] = useState(null)
    const [searchByName, setSearchByName] = useState("");
    const [objPagination, setObjPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationBy10, setPaginationBy10] = useState(null);

    useEffect(() => {
        if (props.pokemon !== null) {
            setPokemons(props.pokemon)
        }
    }, [props])

    const search = () => {
        const response = axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000`)
            .then(response => {

                const poke = response.data.results.filter(value => value.name.toLowerCase().includes(searchByName.toLowerCase()))
                setSearchValue(poke)
            })
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


    useEffect(() => {
        if (objPagination !== null) {
            const response = axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${objPagination.offset}&limit=20`)
                .then(res => {
                    setPokemons(res.data)
                    setCurrentPage(objPagination.page + 1)
                }).catch(error => {console.log(error)})
        }
    }, [objPagination])


    let pagination = paginationByOffsets();

    useEffect(() => {
        let newArr = [];
        let limit = 10;
        if (currentPage === 10) {
            limit += 10
            for (let i = currentPage; i < limit; i++) {
                newArr.push(pagination[i])
            }
        } else if (currentPage === 20) {
            limit = 30
            for (let i = currentPage; i < limit; i++) {
                newArr.push(pagination[i])
            }
        }
        else if (currentPage === 30){
            limit = 40;
            for (let i = currentPage; i < limit; i++) {
                newArr.push(pagination[i])
            }
        }
            else {
            for (let i = currentPage; i < limit; i++) {
                newArr.push(pagination[i])
            }
        }
        setPaginationBy10(newArr);
    }, [currentPage])


    return pokemons !== null ? (
            <>
                <section className="section">
                    <div className="search">
                        <input id="search-input" type="text" onChange={(e) => setSearchByName(e.target.value)}
                               placeholder="Search by name"/>
                        <button onClick={search}>search</button>
                        <button onClick={resetSearch}>reset</button>
                        <button>
                            <NavLink style={{padding: 12, textDecoration: 'none'}} to="/favorites"> Favorites </NavLink>
                        </button>
                        {currentPage > 0 ?
                            <p> Displaying results for page : {currentPage}</p>
                            : ""
                        }
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
                            </>)

                    }

                    <div className="pagination">


                        <MdArrowBackIosNew className="back-btn" style={{fontSize: 70}}/>
                        {/*{pagination.map((item, i) => (*/}
                        {/*    <button*/}

                        {/*        onClick={() => setObjPagination(pagination[i])}*/}

                        {/*        key={pagination[i].page}*/}
                        {/*        id={pagination[i].page}*/}

                        {/*    >*/}
                        {/*        page: {pagination[i].page + 2}*/}

                        {/*    </button>*/}
                        {/*))}*/}

                        {paginationBy10.map((item, i) => (
                            <button

                                onClick={() => setObjPagination(paginationBy10[i])}

                                key={paginationBy10[i].page}
                                id={paginationBy10[i].page}

                            >
                                page: {paginationBy10[i].page + 1}

                            </button>
                        ))}

                        <MdNavigateNext className="next-btn" style={{fontSize: 105}}
                                        onClick={getNextPage(pokemons.next)}/>
                    </div>
                </section>


            </>) :
        <p>404</p>


}