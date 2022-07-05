import {useState, useEffect} from "react";

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
                </div>

            </div>
        </div>


    </>) : ""
}