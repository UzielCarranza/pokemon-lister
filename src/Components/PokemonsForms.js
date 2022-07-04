import {useState, useEffect} from "react";
export const PokemonsForms = (props) => {
    const [forms, setForms] = useState(null);


    useEffect(() => {
        if (props.forms !== null) {
            setForms(props.forms)
            console.log(props)
        }
    }, [props])
    return forms !== null ? (<>

        <div>
                <h1>hi {props.forms.pokemon.name}</h1>
                <img src={props.forms.sprites.front_default} alt=""/>
        </div>
    </>) : ""
}