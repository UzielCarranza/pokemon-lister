import {Pokemons} from "./Components/Pokemons";
import {getServerData} from "./Components/GetServerData";
import {DataSource} from "./Components/DataSource";


function App() {
    return (
        <>
            <DataSource getDataFunc={getServerData('https://pokeapi.co/api/v2/pokemon/')} resourceName="pokemon" >
                <Pokemons/>
            </DataSource>
        </>
    )
}

export default App;
