import {useEffect, useState} from "react";
import './Pokemons.css';
import axios from "axios";
import {NavLink} from "react-router-dom";
import {paginationByOffsets} from "./paginationByOffsets";
import {SearchByName} from "./functionality/SearchByName";
import {DisplayMainPageOfPokemons} from "./DisplayMainPageOfPokemons";


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
                }).catch(error => {
                    console.log(error)
                })
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
        } else if (currentPage === 30) {
            limit = 40;
            for (let i = currentPage; i < limit; i++) {
                newArr.push(pagination[i])
            }
        } else {
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
                    <div className="next-previous--buttons">
                        <button onClick={getPreviousPage(pokemons.previous)}>back</button>
                        <button onClick={getNextPage(pokemons.next)}>next</button>
                    </div>


                    {searchValue !== null ?
                        <SearchByName name={searchValue}/>
                        :
                        <DisplayMainPageOfPokemons pokemons={pokemons}/>
                    }


                    <div className="pagination">
                        {paginationBy10.map((item, i) => (
                            <button

                                onClick={() => setObjPagination(paginationBy10[i])}

                                key={paginationBy10[i].page}
                                id={paginationBy10[i].page}

                            >
                                page: {paginationBy10[i].page + 1}

                            </button>
                        ))}
                    </div>
                </section>


            </>) :
        <p>404</p>


}