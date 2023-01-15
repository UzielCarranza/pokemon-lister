import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";
import {Stats} from "./Stats";
import {Modal} from "../Utils/Modal";
import {IsAddedToFavorites} from "./functionality/IsAddedToFavorites";
import {getPokemonType} from "./getPokemonType";

export const PokemonsForms = ({forms}) => {

    return forms && (

        <div className="card" style={{backgroundColor: `${getPokemonType(forms.types[0].type.name)}`}}>

            <IsAddedToFavorites pokemon={forms}/>

            <span style={{fontSize: 20, fontWeight: "bold", marginLeft: 20}}>{forms.types[0].type.name}</span>
            <h1 className="pokemon-name">{forms.pokemon.name}</h1>
            <div className="img-section-wrapper">
                <img className="card-img" src={forms.sprites.front_default} alt="pokemons"/>

                <DataSource
                    getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon/${forms.pokemon.name}/`)}
                    resourceName="stats">
                    <Stats/>
                </DataSource>
            </div>

            <Modal children={forms}/>
            {/*<DisplayPokemonsHabitat pokemon={forms}/>*/}
        </div>
    )
}