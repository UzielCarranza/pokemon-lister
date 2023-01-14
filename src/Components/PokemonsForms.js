import {useState, useEffect} from "react";
import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";
import {Stats} from "./Stats";
import {Modal} from "../Utils/Modal";
import {DisplayPokemonsHabitat} from "./DisplayPokemonsHabitat";
import {IsAddedToFavorites} from "./functionality/IsAddedToFavorites";

export const PokemonsForms = (props) => {
    const [forms, setForms] = useState(null);

    useEffect(() => {
        if (props.forms !== null) {
            setForms(props.forms);

        }
    }, [props])


    return forms !== null && (<>


        <div className="card">
            <IsAddedToFavorites pokemon={props.forms} />

            <span style={{fontSize: 20, fontWeight: "bold", marginLeft: 20}}>{forms.types[0].type.name}</span>
            <h1 className="pokemon-name">{props.forms.pokemon.name}</h1>
            <div className="img-section-wrapper">
                <img className="card-img" src={props.forms.sprites.front_default} alt="pokemons"/>

                <DataSource
                    getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon/${props.forms.pokemon.name}/`)}
                    resourceName="stats">
                    <Stats/>
                </DataSource>
            </div>

            <Modal children={props.forms}/>
            <DisplayPokemonsHabitat pokemon={props.forms}/>
        </div>


    </>)
}