import {useState, useEffect} from "react";
import {DataSource} from "./DataSource";
import {getServerData} from "./GetServerData";
import {Abilities} from "./Abilities";

export const PokemonsForms = (props) => {
    const [forms, setForms] = useState(null);


    useEffect(() => {
        if (props.forms !== null) {
            setForms(props.forms)
        }
    }, [props])
    return forms !== null ? (<>

        <div className="card">
            <div className="card-front">
                <h1 className="pokemon-name">{props.forms.pokemon.name}</h1>
                <img src={props.forms.sprites.front_default} alt=""/>
                <div className="card-back">
                    <h3>{props.forms.types[0].type.name}</h3>
                    <DataSource getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon/${props.forms.pokemon.name}/`)}
                                resourceName="abilities" >
                        <Abilities/>
                    </DataSource>
                </div>

            </div>
        </div>


    </>) : ""
}