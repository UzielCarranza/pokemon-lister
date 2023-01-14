import {AiTwotoneStar} from "react-icons/ai";
import {toLocalStorage} from "../../Utils/toLocalStorage";
import {removeFromLocalStorage} from "../../Utils/removeFromLocalStorage";
import {useState} from "react";
import {useEffect} from "react";
import {getFromLocalStorage} from "../../Utils/getFromLocalStorage";

export const IsAddedToFavorites = ({pokemon}) => {

    const [favorite, setFavorite] = useState(false);

    const localStorageTrigger = () => {
        setFavorite(true);
        toLocalStorage(pokemon.name);
    }
    const removeFavorite = () => {
        setFavorite(false);
        removeFromLocalStorage(pokemon.name);
    }

    useEffect(() => {
        let fav = getFromLocalStorage();
        for (let i = 0; i <= fav.length; i++) {
            if (fav[i] === pokemon.name) {
                setFavorite(true)
            }
        }
    }, [pokemon.name])


    return (
        favorite === true ?
            <AiTwotoneStar className='selected-favorite' style={{color: "yellow"}} onClick={removeFavorite}/>
            :
            <AiTwotoneStar className='unselected-favorite' style={{color: '#fff'}} onClick={localStorageTrigger}/>

    )
}