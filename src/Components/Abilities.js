import {useEffect, useState} from "react";


export const Abilities = (props) => {
    const [abilities, setAbilities] = useState(null)

    useEffect(() => {
        if (props.abilities !== null) {
            setAbilities(props.abilities)
        }
    }, [props])
    return abilities !== null ? (<>

        <h1>abilities: </h1>
        <div className="abilities">
            <h2>{abilities.abilities[0].ability.name ? abilities.abilities[0].ability.name : ' '}</h2>
            <h2>{abilities.abilities[1].ability.name ? abilities.abilities[1].ability.name : ' '}</h2>

        </div>


    </>) : ""
}