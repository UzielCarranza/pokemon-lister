import {useEffect, useState} from "react";
import {GiCaveEntrance, GiFallingRocks, GiForest, GiGrassMushroom, GiMountainCave, GiRiver} from "react-icons/gi";


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

            {

                res.habitat.name === 'mountain' ?

                    <div className="habitat">
                        <p>Habitat: </p> <p>{res.habitat.name}</p>
                        <GiMountainCave style={{color: "brown", fontSize: 50}}/>
                    </div>
                    :

                    res.habitat.name === 'grassland' ?
                        <div className="habitat">
                            <p>Habitat: </p> <p>{res.habitat.name}</p>
                            <GiGrassMushroom style={{color: "green", fontSize: 50}}/>
                        </div>
                        :

                        res.habitat.name === 'waters-edge' ?
                            <div className="habitat">
                                <p>Habitat: </p> <p>{res.habitat.name}</p>
                                <GiRiver style={{color: "blue", fontSize: 50}}/>
                            </div>


                            :

                            res.habitat.name === 'forest' ?
                                <div className="habitat">
                                    <p>Habitat: </p> <p>{res.habitat.name}</p>
                                    <GiForest style={{color: "green", fontSize: 50}}/>
                                </div>


                                :

                                res.habitat.name === 'rough-terrain' ?
                                    <div className="habitat">
                                        <p>Habitat: </p> <p>{res.habitat.name}</p>
                                        <  GiFallingRocks style={{color: "brown", fontSize: 50}}/>
                                    </div>

                                    :

                                    res.habitat.name === 'cave' ?
                                        <div className="habitat">
                                            <p>Habitat: </p> <p>{res.habitat.name}</p>
                                            <GiCaveEntrance
                                                style={{color: "brown", fontSize: 50}}/>
                                        </div>


                                        : <p>{res.habitat.name}</p>


            }
        </>
    ) : <p>loading</p>
}