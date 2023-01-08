import {Pokemons} from "./Components/Pokemons";
import {getServerData} from "./Utils/GetServerData";
import {DataSource} from "./Utils/DataSource";

import React from "react";
import {Routes, Route} from "react-router-dom";
import {Favorites} from "./Components/Favorites";
import {NotFound} from "./Components/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <DataSource getDataFunc={getServerData('https://pokeapi.co/api/v2/pokemon/')} resourceName="pokemon">
                    <Pokemons/>
                </DataSource>
            }/>
            <Route path="/favorites" element={
                <Favorites/>
            }/>

            <Route
                path="*"
                element={
                        <NotFound/>
                }
            />
        </Routes>
    )
}

export default App;