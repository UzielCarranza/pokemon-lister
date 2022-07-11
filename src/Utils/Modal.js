import styled from 'styled-components';
import {useState} from "react";
import './Modal.css';
import {AiFillCloseCircle} from "react-icons/ai";
import {DataSource} from "./DataSource";
import {getServerData} from "./GetServerData";
import {Abilities} from "../Components/Abilities";
import {MdCatchingPokemon} from "react-icons/md";
import {SpeciesHabitat} from "../Components/SpeciesHabitat";
import {Evolutions} from "../Components/Evolutions";

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
flex-direction: row;

    flex-wrap: wrap;
justify-content: space-between;
`;

export const Modal = ({children}) => {

    const [shouldShow, setShouldShow] = useState(false);
    return (
        <>
            <div className="open-modal">
                <MdCatchingPokemon style={{color: "white", backgroundColor: "red", fontSize: 60}}
                                   className="close-modal" onClick={() => setShouldShow(true)}/>
            </div>
            {shouldShow && (
                <ModalBackground>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <div className="close-modal--wrapper">
                            <AiFillCloseCircle style={{fontSize: 40, color: "red"}} className="close-modal"
                                               onClick={() => setShouldShow(false)}/>
                        </div>
                        <div className="extra-details__div-modal">
                            <DataSource
                                getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-species/${children.name}/`)}
                                resourceName="evolutions">
                                <Evolutions/>
                            </DataSource>
                        </div>

                        <DataSource
                            getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon-species/${children.name}/`)}
                            resourceName="species">
                            <SpeciesHabitat/>
                        </DataSource>
                        <DataSource
                            getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon/${children.name}/`)}
                            resourceName="abilities">
                            <Abilities/>
                        </DataSource>
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    );
}