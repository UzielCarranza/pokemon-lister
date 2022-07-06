import styled from 'styled-components';
import {useState} from "react";
import './Modal.css';

import {AiFillCloseCircle} from "react-icons/ai";

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
    const [shouldShow, setShouldShow] = useState(false);

    console.log(children)
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
                        <AiFillCloseCircle style={{fontSize: 40, color: "red"}} className="close-modal" onClick={() => setShouldShow(false)}/>
                        </div>

                        <p>Type: {children.types[1] ? children.types[1].type.name : "none"}</p>
                        <div className="extra-details__div-modal">
                            <img className="extra-details__img--modal" src={children.sprites.back_default}
                                 alt="pokemon-back"/>
                            <img className="extra-details__img--modal" src={children.sprites.front_shiny}
                                 alt="pokemon-shiny-front"/>

                            <img className="extra-details__img--modal" src={children.sprites.back_shiny}
                                 alt="pokemon-shiny-back"/>
                        </div>
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    );
}