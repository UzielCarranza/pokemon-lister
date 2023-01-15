import {useEffect, useState} from "react";
import '../styles/Pokemons.css';
import axios from "axios";
import {paginationByOffsets} from "./paginationByOffsets";
import {SearchByName} from "./functionality/SearchByName";
import {DisplayMainPageOfPokemons} from "./DisplayMainPageOfPokemons";
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {LoadingScreen} from "./LoadingScreen";
import {NavBar} from "./NavBar";


export const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState(null);
    const [objPagination, setObjPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationBy10, setPaginationBy10] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState(null)

    useEffect(() => {
        if (props.pokemon !== null) {
            setPokemons(props.pokemon)
        }
    }, [props])


    const onPreviousOrNextPages = url => async () => {
        setLoading(true);
        try {
            const response = await axios.get(url)
            setPokemons(response.data);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
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


    const getSearchResult = (results) => {
        setSearchValue(results);
    }
    const getIsLoadingStatus = (status) => {
        setLoading(status);
    }
    return pokemons !== null ? (
            <>
                <section className="section">
                    <NavBar searchResults={getSearchResult} isLoading={getIsLoadingStatus}/>
                    <div className="next-previous--buttons">
                        <GrFormPreviousLink className="selected back-next-btn"
                                            onClick={onPreviousOrNextPages(pokemons.previous)}/>
                        <GrFormNextLink className="selected back-next-btn" onClick={onPreviousOrNextPages(pokemons.next)}/>
                    </div>

                    {
                        loading === true ? <LoadingScreen/> : ""
                    }

                    {searchValue !== null ?
                        <>
                            {loading === true ? <LoadingScreen/> : <SearchByName name={searchValue}/>}
                        </>


                        :
                        <>
                            {loading === true ? <LoadingScreen/> : <DisplayMainPageOfPokemons pokemons={pokemons}/>}
                        </>
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
        <LoadingScreen/>


}