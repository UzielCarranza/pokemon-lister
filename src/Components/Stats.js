import {useEffect, useState} from "react";


export const Stats = (props) => {
    const [stats, setStats] = useState(null)

    useEffect(() => {
        if (props.stats !== null) {
            setStats(props.stats)
        }
    }, [props])
    return stats !== null ? (<>
        <div>
            <h1>{stats.stats[0].stat.name}</h1>
            <p>{stats.stats[0].base_stat}</p>


            <h1>{stats.stats[1].stat.name}</h1>
            <p>{stats.stats[1].base_stat}</p>

            <h1>{stats.stats[2].stat.name}</h1>
            <p>{stats.stats[2].base_stat}</p>

            <h1>{stats.stats[3].stat.name}</h1>
            <p>{stats.stats[3].base_stat}</p>

            <h1>{stats.stats[4].stat.name}</h1>
            <p>{stats.stats[4].base_stat}</p>

            <h1>{stats.stats[5].stat.name}</h1>
            <p>{stats.stats[5].base_stat}</p>

            <p>{stats.location_area_encounters}</p>

        </div>


    </>) : ""
}