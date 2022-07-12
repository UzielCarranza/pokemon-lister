import {useEffect, useState} from "react";
import {EvolvesFrom} from "./EvolvesFrom";
import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";
import {EvolvesTo} from "./EvolvesTo";


export const Evolutions = (props) => {
    const [evolutions, setEvolutions] = useState(null);
    const [evolvesFrom, setEvolvesFrom] = useState(null);
    const [evolvesTo, setEvolvesTo] = useState(null);

    useEffect(() => {
        if (props.evolutions !== null) {
            setEvolutions(props.evolutions)
            setEvolvesFrom(props.evolutions.evolves_from_species)
            setEvolvesTo(props.evolutions.evolution_chain)
        }
    }, [props])
    return evolutions !== null ? (
        <div>

            {
                evolutions.evolves_from_species !== null ?
                    <DataSource
                        getDataFunc={getServerData(evolvesFrom.url)}
                        resourceName="evolves_from">

                        <EvolvesFrom/>
                    </DataSource>

                    : ' '
            }

            {
                evolutions.evolution_chain !== null ?

                    <EvolvesTo url={evolvesTo.url} pokemonName={evolutions.name}/>
                    : ' '

            }

        </div>


    ) : <p>loading</p>

}