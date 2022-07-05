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

        <div className="card">
            <div className="card-front">
                <h1 className="pokemon-name">{props.forms.pokemon.name}</h1>
                <img src={props.forms.sprites.front_default} alt=""/>
                <div className="card-back">
                    <h3>Coffee Project</h3>
                    <p>A pair programming project developed with vanilla javaScript, CSS3, and HTML5</p>
                </div>

            </div>
        </div>


    </>) : ""
}