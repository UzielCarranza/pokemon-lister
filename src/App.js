import {Pokemons} from "./Components/Pokemons";
import {getServerData} from "./Utils/GetServerData";
import {DataSource} from "./Utils/DataSource";

import React from "react";
import {Routes, Route} from "react-router-dom";
import {Favorites} from "./Components/Favorites";

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
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default App;