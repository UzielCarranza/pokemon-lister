import {useEffect, useState} from "react";
import axios from "axios";


export const EvolvesTo = (props) => {
    const [evolvesTo, setEvolvesTo] = useState(null);
    const [nextForms, setNextForm] = useState(null)


    useEffect(() => {
        if (props.evolves_To !== null) {
            setEvolvesTo(props.evolves_To)
        }
    }, [props.evolves_To])
    // console.log(evolvesTo)


    useEffect(() => {
        if (evolvesTo !== null){
            // setEvolvesTo(evolvesTo.species.name)
            setNextForm(evolvesTo.chain.evolves_to[0].species.name)
            console.log(nextForms)

        }

    }, [evolvesTo, nextForms])
    return <p>loading</p>

    // useEffect(() => {
    //     if (evolvesTo !== null) {
    //         axios.get(`"https://pokeapi.co/api/v2/pokemon-species/${evolvesFrom.name}/`)
    //             .then(res => {
    //                 setPreviousForm(res.data)
    //             })
    //     }
    // }, [evolvesFrom])
    //
    // return previousForms !== null ? (
    //         <div>
    //             <p>Evolves from</p>
    //             <img src={previousForms.sprites.front_default} alt="previous-pokemons-forms"/>
    //
    //         </div>
    //     )
    //
    //     : <p>loading</p>
}