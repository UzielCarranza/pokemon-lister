import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {BsSearch, BsStarFill} from "react-icons/bs";
import {GrPowerReset} from "react-icons/gr";
import "../styles/navBar.css";
import {NavLink} from "react-router-dom";
import axios from "axios";


export const NavBar = ({searchResults, isLoading, isSearchBarReseting}) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [searchByName, setSearchByName] = useState("");

    const closeMenu = () => {
        setIsNavExpanded(false);
    }
    const search = () => {
        isLoading(true);
        try {
            const response = axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000`)
                .then(response => {

                    const poke = response.data.results.filter(value => value.name.toLowerCase().includes(searchByName.toLowerCase()))
                    searchResults(poke);
                })
        } catch (error) {
            console.error(error.message);
        }
        isLoading(false);
        setIsNavExpanded(false);

    }

    const resetSearch = () => {
        document.getElementById("search-input").value = "";
        isSearchBarReseting(null);
    }

    return (
        <nav className="navigation">
            {isNavExpanded ? <AiOutlineClose style={{color: "#fff", backgroundColor: "red"}} className="hamburger"
                                             onClick={closeMenu}/>
                : <button className="hamburger" onClick={() => setIsNavExpanded(true)}>
                    {/* icon from heroicons.com */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            }

            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul className="search">
                    <li className="search-by-name-container">
                        <input id="search-input" type="text" onChange={(e) => setSearchByName(e.target.value)}
                               placeholder="Search by name"/>
                        <BsSearch id="search-icon" onClick={search}/>
                        <GrPowerReset id="reset-icon" onClick={resetSearch}/>
                    </li>
                    <li className="search-by-name-container">
                        <div className="favorites">
                            <BsStarFill/>
                            <NavLink className="selected" style={{padding: 12, textDecoration: 'none', color: "#000"}}
                                     to="/favorites"> Favorites </NavLink>
                        </div>
                    </li>
                    {/*{currentPage > 0 ?*/}
                    {/*    <p> Displaying results for page : {currentPage}</p>*/}
                    {/*    : ""*/}
                    {/*}*/}
                </ul>
            </div>
        </nav>
    );
}