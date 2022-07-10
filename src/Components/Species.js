import {useEffect, useState} from "react";
import {
    GiCaveEntrance,
    GiFallingRocks,
    GiForest,
    GiGrassMushroom,
    GiModernCity,
    GiMountainCave,
    GiRiver, GiWaterfall
} from "react-icons/gi";
import {BiWater} from "react-icons/bi";
import {BsQuestionLg} from "react-icons/bs";


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
                                <GiWaterfall style={{color: "blue", fontSize: 50}}/>
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


                                        :

                                        res.habitat.name === 'urban' ?
                                            <div className="habitat">
                                                <p>Habitat: </p> <p>{res.habitat.name}</p>
                                                <GiModernCity
                                                    style={{color: "black", fontSize: 50}}/>
                                            </div>

                                            :

                                            res.habitat.name === 'sea' ?
                                                <div className="habitat">
                                                    <p>Habitat: </p> <p>{res.habitat.name}</p>
                                                    <BiWater
                                                        style={{color: "blue", fontSize: 50}}/>
                                                </div>


                                                :

                                                res.habitat.name === 'rare' ?
                                                    <div className="habitat">
                                                        <p>Habitat: </p> <p>{res.habitat.name}</p>
                                                        <BsQuestionLg
                                                            style={{color: "black", fontSize: 40}}/>
                                                    </div>


                                                    :

                                                    res.habitat.name !== undefined || true ?
                                                        <div className="habitat">
                                                            <p>Habitat: </p> <p>{res.habitat.name}</p>
                                                            <BsQuestionLg
                                                                style={{color: "black", fontSize: 40}}/>
                                                        </div>

                                                        :

                                                        <p>Loading</p>


            }
        </>
    ) : <p>loading</p>
}