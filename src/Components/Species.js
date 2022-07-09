import {useEffect, useState} from "react";
import {GiMountainCave} from "react-icons/gi";


export const Species = (props) => {
    const [res, setRes] = useState(null)

    useEffect(() => {
        if (props !== null) {
            setRes(props.species)

            console.log(res)
        }
    }, [props, res])

    return res !== null ? (

        <>
            {res.habitat.name === 'mountain' ?
                <div>
                    <p>{res.habitat.name}</p>
                    <GiMountainCave/>
                </div>

                : <p>none</p>
            }
        </>
    ) : <p>loading</p>
}