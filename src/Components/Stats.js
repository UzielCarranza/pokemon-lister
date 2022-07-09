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
            <p>{stats.stats[0].stat.name}</p>
            <p>{stats.stats[0].base_stat}</p>
    </div>


    <div className="stats">
        <p>{stats.stats[1].stat.name}</p>
        <p>{stats.stats[1].base_stat}</p>
    </div>


    <div className="stats">

        <p>def</p>
        <p>{stats.stats[2].base_stat}</p>
    </div>

    {/*<div className="stats">*/}
    {/*    <p>sp-attack</p>*/}
    {/*    <p>{stats.stats[3].base_stat}</p>*/}
    {/*</div>*/}
    {/*<div className="stats">*/}

    {/*    <p>sp-def</p>*/}
    {/*    <p>{stats.stats[4].base_stat}</p>*/}
    {/*</div>*/}

    {/*<div className="stats">*/}
    {/*    <p>{stats.stats[5].stat.name}</p>*/}
    {/*    <p>{stats.stats[5].base_stat}</p>*/}
    {/*</div>*/}
    </section>

</>) :
    ""
}