import {useEffect, useState} from "react";


export const Abilities = (props) => {
    const [abilities, setAbilities] = useState(null)

    useEffect(() => {
        if (props.abilities !== null) {
            setAbilities(props.abilities)
        }
    }, [props])
    return abilities !== null ? (<>


        <div className="abilities">

            <p>abilities: </p>
            <p>{abilities.abilities[0].ability.name ? abilities.abilities[0].ability.name : ' '}</p>

            {abilities.abilities[1] ?
                <p>{abilities.abilities[1].ability.name ? abilities.abilities[1].ability.name : ' '}</p>
                : ' '
            }

        </div>


    </>) : ""
}