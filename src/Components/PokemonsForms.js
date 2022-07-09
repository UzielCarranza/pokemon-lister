import {useState, useEffect} from "react";
import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";
import {Stats} from "./Stats";
import {Modal} from "../Utils/Modal";
import {AiFillFire} from "react-icons/ai";
import {GiElectric, GiExplodingPlanet, GiFairyWand, GiGrass, GiPoisonGas} from "react-icons/gi";
import {MdWaterDrop} from "react-icons/md";
import {BsFillBugFill} from "react-icons/bs";
import {SiPokemon} from "react-icons/si";

export const PokemonsForms = (props) => {
    const [forms, setForms] = useState(null);


    useEffect(() => {
        if (props.forms !== null) {
            setForms(props.forms)
        }
    }, [props])
    console.log(forms)
    return forms !== null ? (<>

        <div className="card">
            <span style={{fontSize: 20, fontWeight: "bold", marginLeft: 20}}>{forms.types[0].type.name}</span>
            <h1 className="pokemon-name">{props.forms.pokemon.name}</h1>
            <div className="img-section-wrapper">
                <img className="card-img" src={props.forms.sprites.front_default} alt=""/>

                <DataSource
                    getDataFunc={getServerData(`https://pokeapi.co/api/v2/pokemon/${props.forms.pokemon.name}/`)}
                    resourceName="stats">
                    <Stats/>
                </DataSource>
            </div>

            <Modal children={props.forms}/>
            {
                props.forms.types[0].type.name === 'grass' ?

                    <h3 className="form-type" style={{backgroundColor: "green"}}>
                        <GiGrass style={{backgroundColor: 'green', color: "white", fontSize: 50}}/></h3>
                    : props.forms.types[0].type.name === 'fire' ?

                        <h3 className="form-type" style={{backgroundColor: 'red'}}>
                            <AiFillFire style={{backgroundColor: "red", color: "white", fontSize: 50}}/></h3>

                        : props.forms.types[0].type.name === 'water' ?

                            <h3 className="form-type"
                                style={{backgroundColor: 'blue'}}>
                                <MdWaterDrop style={{backgroundColor: "blue", color: "white", fontSize: 50}}/></h3>


                            : props.forms.types[0].type.name === 'bug' ?

                                <h3 className="form-type"
                                    style={{backgroundColor: 'brown'}}>
                                    <BsFillBugFill style={{backgroundColor: "brown", color: "white", fontSize: 50}}/></h3>

                                : props.forms.types[0].type.name === 'poison' ?
                                    <h3 className="form-type"
                                        style={{backgroundColor: 'green'}}>
                                        <GiPoisonGas style={{backgroundColor: "green", color: "white", fontSize: 50}}/></h3>

                                    : props.forms.types[0].type.name === 'electric' ?
                                        <h3 className="form-type"
                                            style={{backgroundColor: 'yellow'}}>
                                            <GiElectric style={{backgroundColor: "yellow", color: "black", fontSize: 50}}/>
                                        </h3>

                                        : props.forms.types[0].type.name === 'ground' ?
                                            <h3 className="form-type"
                                                style={{backgroundColor: 'brown'}}>
                                                <GiExplodingPlanet style={{backgroundColor: "brown", color: "white", fontSize: 50}}/>
                                            </h3>

                                            : props.forms.types[0].type.name === 'fairy' ?
                                                <h3 className="form-type"
                                                    style={{backgroundColor: 'pink'}}>
                                                    <GiFairyWand style={{backgroundColor: "pink", color: "white", fontSize: 50}}/>
                                                </h3>


                                        : props.forms.types[0].type.name === 'normal' ?

                                            <h3 className="form-type"
                                                style={{backgroundColor: '#000'}}>
                                                <SiPokemon style={{fontSize: 100, color: "yellow"}}/></h3>
                                            : ''
            }
        </div>


    </>) : ""
}