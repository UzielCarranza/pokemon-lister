import styled from 'styled-components';
import {useState} from "react";
import './Modal.css';
import {AiFillCloseCircle} from "react-icons/ai";
import {DataSource} from "./DataSource";
import {getServerData} from "./GetServerData";
import {Abilities} from "../Components/Abilities";
import {FaCloudsmith} from "react-icons/fa";
import {RiEmotionNormalLine} from "react-icons/ri";
import {MdCatchingPokemon} from "react-icons/md";
import {GiBatWing} from "react-icons/gi";

const ModalBackground = styled.div`
position: fixed;
z-index: 4;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0,0,0,0.5);
`;

const ModalBody = styled.div`
background-color: rgba(220,220,220);
margin: 10% auto;
padding: 20px;
width: 90%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const Modal = ({children}) => {
    // console.log(children.id)

    const [shouldShow, setShouldShow] = useState(false);
    return (
        <>
            <div className="open-modal">
                <MdCatchingPokemon style={{color: "white", backgroundColor: "red", fontSize: 60}} className="close-modal" onClick={() => setShouldShow(true)}/>
            </div>
            {shouldShow && (
                <ModalBackground>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <div className="close-modal--wrapper">
                            <AiFillCloseCircle style={{fontSize: 40, color: "red"}} className="close-modal"
                                               onClick={() => setShouldShow(false)}/>
                        </div>
                        <div className="extra-details__div-modal">

                            <img className="extra-details__img--modal" src={children.sprites.back_default}
                                 alt="pokemon-back"/>
                            <img className="extra-details__img--modal" src={children.sprites.front_shiny}
                                 alt="pokemon-shiny-front"/>
                            <img className="extra-details__img--modal" src={children.sprites.back_shiny}
                                 alt="pokemon-shiny-back"/>
                        </div>

                        <div className="abilities-wrapper">
                            <h1>Type/s:</h1>
                            <h3 className="types">{children.types[1] ? children.types[1].type.name : ""}

                                { children.types[1] ? <span>{children.types[1].type.name === "poison" ?
                                    <FaCloudsmith style={{color: "green", fontSize: 20}}/>
                                    : children.types[1].type.name === 'flying' ?  <GiBatWing style={{color: "black", fontSize: 20}}/>
                                        : ' '}

                                </span>   : <RiEmotionNormalLine style={{color: "black", fontSize: 20, textAlign: "center"}}/>

                                }


                            </h3>


                            <DataSource
                                getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon/${children.name}/`)}
                                resourceName="abilities">
                                <Abilities/>
                            </DataSource>
                        </div>
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    );
}