import {useEffect, useState} from "react";


export const Stats = (props) => {
    const [stats, setStats] = useState(null)

    useEffect(() => {
        if (props.stats !== null) {
            setStats(props.stats)
        }
    }, [props])
    return stats !== null ? (<>
    <section className="stats-wrapper">


        <div className="stats">
            <h2>{stats.stats[0].stat.name}</h2>
            <h5>{stats.stats[0].base_stat}</h5>
    </div>


    <div className="stats">
        <h2>{stats.stats[1].stat.name}</h2>
        <h5>{stats.stats[1].base_stat}</h5>
    </div>


    <div className="stats">

        <h2>{stats.stats[2].stat.name}</h2>
        <h5>{stats.stats[2].base_stat}</h5>
    </div>

    <div className="stats">
        <h2>{stats.stats[3].stat.name}</h2>
        <h5>{stats.stats[3].base_stat}</h5>
    </div>
    <div className="stats">

        <h2>{stats.stats[4].stat.name}</h2>
        <h5>{stats.stats[4].base_stat}</h5>
    </div>

    <div className="stats">
        <h2>{stats.stats[5].stat.name}</h2>
        <h5>{stats.stats[5].base_stat}</h5>
    </div>
    </section>

</>) :
    ""
}