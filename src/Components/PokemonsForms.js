import {useState, useEffect} from "react";
import {DataSource} from "../Utils/DataSource";
import {getServerData} from "../Utils/GetServerData";
import {Stats} from "./Stats";
import {Modal} from "../Utils/Modal";
import {AiTwotoneStar} from "react-icons/ai";
import {toLocalStorage} from "../Utils/toLocalStorage";
import {getFromLocalStorage} from "../Utils/getFromLocalStorage";
import {removeFromLocalStorage} from "../Utils/removeFromLocalStorage";
import {DisplayPokemonsHabitat} from "./DisplayPokemonsHabitat";

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
            <DisplayPokemonsHabitat pokemon={props.forms}/>
        </div>


    </>) : ""
}