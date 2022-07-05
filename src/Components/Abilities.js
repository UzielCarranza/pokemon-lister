import {useEffect, useState} from "react";


export const Abilities = (props) => {
    const [abilities, setAbilities] = useState(null)

    useEffect(() => {
        if (props.abilities !== null) {
            setAbilities(props.abilities)
        }
    }, [props])
    return abilities !== null ? (<>
        <div>
            <h1>{abilities.stats[0].stat.name}</h1>
            <p>{abilities.stats[0].base_stat}</p>


            <h1>{abilities.stats[1].stat.name}</h1>
            <p>{abilities.stats[1].base_stat}</p>

            <h1>{abilities.stats[2].stat.name}</h1>
            <p>{abilities.stats[2].base_stat}</p>

            <h1>{abilities.stats[3].stat.name}</h1>
            <p>{abilities.stats[3].base_stat}</p>

            <h1>{abilities.stats[4].stat.name}</h1>
            <p>{abilities.stats[4].base_stat}</p>

            <h1>{abilities.stats[5].stat.name}</h1>
            <p>{abilities.stats[5].base_stat}</p>

            <p>{abilities.location_area_encounters}</p>

        </div>


    </>) : ""
}