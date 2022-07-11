import {useEffect, useState} from "react";
import {EvolvesFrom} from "./EvolvesFrom";
import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";


export const Evolutions = (props) => {
    const [evolutions, setEvolutions] = useState(null);
    const [evolvesFrom, setEvolvesFrom] = useState(null);

    useEffect(() => {
        if (props.evolutions !== null) {
            setEvolutions(props.evolutions)
            setEvolvesFrom(props.evolutions.evolves_from_species)
        }
    }, [props])

    return evolutions !== null ? (
        <>

            {evolutions.evolves_from_species !== null ?


                <DataSource
                    getDataFunc={getServerData(evolvesFrom.url)}
                    resourceName="evolves_from">

                    <EvolvesFrom/>
                </DataSource>

                : ' '
            }
        </>
    ) : <p>loading</p>

}