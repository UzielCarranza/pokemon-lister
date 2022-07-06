import {useState, useEffect} from "react";
import {DataSource} from "./DataSource";
import {getServerData} from "./GetServerData";
import {Stats} from "./Stats";
import {Modal} from "../Utils/Modal";

export const PokemonsForms = (props) => {
    const [forms, setForms] = useState(null);


    useEffect(() => {
        if (props.forms !== null) {
            setForms(props.forms)
        }
    }, [props])
    return forms !== null ? (<>

        <div className="card">
            <h1 className="pokemon-name">{props.forms.pokemon.name}</h1>
            <img className="card-img" src={props.forms.sprites.front_default} alt=""/>

            <DataSource getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon/${props.forms.pokemon.name}/`)}
                        resourceName="stats">
                <Stats/>
            </DataSource>
            <Modal children={props.forms}/>
            <h3>{props.forms.types[0].type.name}</h3>
        </div>


    </>) : ""
}