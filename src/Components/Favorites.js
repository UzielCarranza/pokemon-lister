import {getFromLocalStorage} from "../Utils/getFromLocalStorage";

export const Favorites = () => {
    let fav = getFromLocalStorage();
    return fav ? (
        <div><p>{fav[2]}</p></div>
    ) : <p>none</p>
}
