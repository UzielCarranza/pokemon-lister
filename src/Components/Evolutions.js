import {useEffect, useState} from "react";


export const EvolvesTo = (props) => {
    const [evolvesTo, setEvolvesTo] = useState(null);
    useEffect(() => {
        if (props !== null){
            setEvolvesTo(props.evolves)
        }
    }, [props])
    console.log(evolvesTo)

    // return evolvesTo !== null ? (
    //     <div>
    //
    //     </div>
    // )

    return <p>loading</p>
}