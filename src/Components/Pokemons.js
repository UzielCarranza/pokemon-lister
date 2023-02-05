import {useEffect, useState} from "react";
import '../styles/Pokemons.css';
import axios from "axios";
import {SearchByName} from "./functionality/SearchByName";
import {DisplayMainPageOfPokemons} from "./DisplayMainPageOfPokemons";
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {LoadingScreen} from "./LoadingScreen";
import {NavBar} from "./NavBar";
import {PaginatedItems} from "./functionality/PaginatedItems";
import {ErrorMessageHandler} from "./functionality/ErrorMessageHandler";


export const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState(null)
    const [pokemonsDataBackup, setPokemonsDataBackup] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (props.pokemon !== null) {
            setPokemons(props.pokemon)
        }
    }, [props])

    const getSearchResult = (results) => {
        setPokemonsDataBackup(pokemons);
        setSearchValue(results);
    }
    const getIsLoadingStatus = (status) => {
        setLoading(status);
    }
    const getSearchBarIsReseting = (status) => {
        setPokemons(pokemonsDataBackup);
        setSearchValue(status);
    }
    const getFetchResultsOnGetRequest = async (results) => {
        setLoading(true);
        try {
            const response = await axios.get(results)
            setPokemons(response.data);
        } catch (error) {
            setError("failFetchingMainPage");
            console.error(error.message);
        }
        setLoading(false);
    }

    return pokemons !== null && error === null ? (
            <>
                <section className="section">
                    <NavBar searchResults={getSearchResult} isLoading={getIsLoadingStatus}
                            isSearchBarReseting={getSearchBarIsReseting}/>
                    <div className="next-previous--buttons">
                        <GrFormPreviousLink className="selected back-next-btn"
                                            onClick={() => getFetchResultsOnGetRequest(pokemons.previous)}/>
                        <GrFormNextLink className="selected back-next-btn"
                                        onClick={() => getFetchResultsOnGetRequest(pokemons.next)}/>
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
                        <PaginatedItems itemsPerPage={20} getResultsOfPagination={getFetchResultsOnGetRequest}/>
                    </div>
                </section>


            </>) :
        error !== null ?
            ErrorMessageHandler({errorType: error}) :
            <LoadingScreen/>


}