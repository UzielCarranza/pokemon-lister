import {useState, useEffect} from "react";
import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";
import {Stats} from "./Stats";
import {Modal} from "../Utils/Modal";
import {AiFillFire, AiOutlineStar, AiTwotoneStar} from "react-icons/ai";
import {
    GiBatWing,
    GiBoxingGloveSurprise, GiDragonSpiral,
    GiElectric,
    GiExplodingPlanet,
    GiFairyWand, GiGhost,
    GiGrass,
    GiMagicPalm, GiMetalBar,
    GiPoisonGas, GiRockGolem
} from "react-icons/gi";
import {MdDarkMode, MdWaterDrop} from "react-icons/md";
import {BsFillBugFill} from "react-icons/bs";
import {SiPokemon} from "react-icons/si";
import {WiSnowflakeCold} from "react-icons/wi";
import {toLocalStorage} from "../Utils/toLocalStorage";
import {getFromLocalStorage} from "../Utils/getFromLocalStorage";
import {removeFromLocalStorage} from "../Utils/removeFromLocalStorage";

export const PokemonsForms = (props) => {
    const [forms, setForms] = useState(null);
    const [favorite, setFavorite] = useState(false);


    useEffect(() => {
        if (props.forms !== null) {
            setForms(props.forms)
            let fav = getFromLocalStorage();
            for (let i = 0; i <= fav.length; i++) {
                if (fav[i] === props.forms.pokemon.name) {
                    setFavorite(true)
                }
            }

        }
    }, [props])

    const localStorageTrigger = () => {
        setFavorite(true)
        toLocalStorage(props.forms.pokemon.name);
    }
    const removeFavorite = () => {
        setFavorite(false)
        removeFromLocalStorage(props.forms.pokemon.name)
    }

    return forms !== null ? (<>


        <div className="card">
            {favorite === true ?
                <AiTwotoneStar className='selected-favorite' style={{color: "yellow"}} onClick={removeFavorite}/>
                :
                <AiTwotoneStar className='unselected-favorite' style={{color: '#fff'}} onClick={localStorageTrigger}/>
            }
            <span style={{fontSize: 20, fontWeight: "bold", marginLeft: 20}}>{forms.types[0].type.name}</span>
            <h1 className="pokemon-name">{props.forms.pokemon.name}</h1>
            <div className="img-section-wrapper">
                <img className="card-img" src={props.forms.sprites.front_default} alt="pokemons"/>

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
                                                <GiExplodingPlanet
                                                    style={{backgroundColor: "brown", color: "white", fontSize: 50}}/>
                                            </h3>

                                            : props.forms.types[0].type.name === 'fairy' ?
                                                <h3 className="form-type"
                                                    style={{backgroundColor: 'pink'}}>
                                                    <GiFairyWand
                                                        style={{backgroundColor: "pink", color: "white", fontSize: 50}}/>
                                                </h3>

                                                : props.forms.types[0].type.name === 'fighting' ?
                                                    <h3 className="form-type"
                                                        style={{backgroundColor: 'black'}}>
                                                        <GiBoxingGloveSurprise
                                                            style={{
                                                                backgroundColor: "black",
                                                                color: "white",
                                                                fontSize: 50
                                                            }}/>
                                                    </h3>

                                                    : props.forms.types[0].type.name === 'psychic' ?
                                                        <h3 className="form-type"
                                                            style={{backgroundColor: 'black'}}>
                                                            <GiMagicPalm
                                                                style={{
                                                                    backgroundColor: "black",
                                                                    color: "yellow",
                                                                    fontSize: 50
                                                                }}/>
                                                        </h3>

                                                        : props.forms.types[0].type.name === 'rock' ?
                                                            <h3 className="form-type"
                                                                style={{backgroundColor: 'brown'}}>
                                                                <GiRockGolem

                                                                    style={{
                                                                        backgroundColor: "brown",
                                                                        color: "white",
                                                                        fontSize: 50
                                                                    }}/>
                                                            </h3>

                                                            : props.forms.types[0].type.name === 'ghost' ?
                                                                <h3 className="form-type"
                                                                    style={{backgroundColor: 'purple'}}>
                                                                    <GiGhost

                                                                        style={{
                                                                            backgroundColor: "purple",
                                                                            color: "white",
                                                                            fontSize: 50
                                                                        }}/>
                                                                </h3>

                                                                : props.forms.types[0].type.name === 'ice' ?
                                                                    <h3 className="form-type"
                                                                        style={{backgroundColor: 'blue'}}>
                                                                        <WiSnowflakeCold

                                                                            style={{
                                                                                backgroundColor: "blue",
                                                                                color: "white",
                                                                                fontSize: 50
                                                                            }}/>
                                                                    </h3>


                                                                    : props.forms.types[0].type.name === 'dragon' ?
                                                                        <h3 className="form-type"
                                                                            style={{backgroundColor: 'red'}}>
                                                                            <GiDragonSpiral

                                                                                style={{
                                                                                    backgroundColor: "red",
                                                                                    color: "white",
                                                                                    fontSize: 50
                                                                                }}/>
                                                                        </h3>

                                                                        : props.forms.types[0].type.name === 'dark' ?
                                                                            <h3 className="form-type"
                                                                                style={{backgroundColor: 'black'}}>
                                                                                <MdDarkMode

                                                                                    style={{
                                                                                        backgroundColor: "black",
                                                                                        color: "white",
                                                                                        fontSize: 50
                                                                                    }}/>
                                                                            </h3>


                                                                            : props.forms.types[0].type.name === 'steel' ?
                                                                                <h3 className="form-type"
                                                                                    style={{backgroundColor: 'grey'}}>
                                                                                    <GiMetalBar

                                                                                        style={{
                                                                                            backgroundColor: "grey",
                                                                                            color: "white",
                                                                                            fontSize: 50
                                                                                        }}/>
                                                                                </h3>

                                                                                : props.forms.types[0].type.name === 'flying' ?
                                                                                    <h3 className="form-type"
                                                                                        style={{backgroundColor: 'black'}}>
                                                                                        <GiBatWing

                                                                                            style={{
                                                                                                backgroundColor: "black",
                                                                                                color: "white",
                                                                                                fontSize: 50
                                                                                            }}/>
                                                                                    </h3>

                                                                                    : props.forms.types[0].type.name === 'normal' ?

                                                                                        <h3 className="form-type"
                                                                                            style={{backgroundColor: '#000'}}>
                                                                                            <SiPokemon
                                                                                                style={{
                                                                                                    fontSize: 100,
                                                                                                    color: "yellow"
                                                                                                }}/>
                                                                                        </h3>
                                                                                        : ''
            }
        </div>


    </>) : ""
}