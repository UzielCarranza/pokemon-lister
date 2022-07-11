import {useEffect, useState} from "react";
import axios from "axios";


export const EvolvesFrom = (props) => {
    const [evolvesFrom, setEvolvesFrom] = useState(null);
    const [previousForms, setPreviousForm] = useState(null)


    useEffect(() => {
        if (props.evolves_from !== null) {
            setEvolvesFrom(props.evolves_from)
        }
    }, [props.evolves_from])

    useEffect(() => {
        if (evolvesFrom !== null) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${evolvesFrom.name}/`)
                .then(res => {
                    console.log(res.data)
                    setPreviousForm(res.data)
                })
        }
    }, [evolvesFrom])

    return previousForms !== null ? (
            <div>
                <p>Evolves from</p>
                <img src={previousForms.sprites.front_default} alt="previous-pokemons-forms"/>

            </div>
        )

        : <p>loading</p>

}