import styled from 'styled-components';
import {useState} from "react";
import './Modal.css';

import {AiFillBug, AiFillCloseCircle, AiFillFire} from "react-icons/ai";
import {DataSource} from "../Components/DataSource";
import {getServerData} from "../Components/GetServerData";
import {Abilities} from "../Components/Abilities";
import {FaCloudsmith} from "react-icons/fa";
import {BiWater} from "react-icons/bi";
import {RiEmotionNormalLine} from "react-icons/ri";

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

    console.log(children)
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <>
            <div className="flex justify-center">
                <button className="text-white shadow-btn w-24 mt-4 cursor-pointer" onClick={() => setShouldShow(true)}>
                    More Details
                </button>
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
                            <h3 className="types">{children.types[1] ? children.types[1].type.name : ""} <span>{
                                children.types[0].type.name === 'grass' ? <div>Poisonous <FaCloudsmith style={{color: "green", fontSize: 20}}/></div>
                                    : children.types[0].type.name === 'fire' ? <div>Fire <AiFillFire style={{color: "red", fontSize: 20}}/></div>

                                        : children.types[0].type.name === 'water' ? <div>Water  <BiWater style={{color: "blue", fontSize: 20}}/></div>

                                            : children.types[0].type.name === 'bug' ? <div>Bug <AiFillBug style={{color: "brown", fontSize: 20}}/></div>
                                            : children.types[0].type.name === 'normal' ? <div>Normal <RiEmotionNormalLine style={{color: "black", fontSize: 20}}/></div>

                                        : 'none'
                            }</span></h3>
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