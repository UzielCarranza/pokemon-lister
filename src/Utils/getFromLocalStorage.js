export const getFromLocalStorage = () => {


    let pokemonArr = [];
    const keys = Object.keys(localStorage);
    let key;

    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        pokemonArr.push(key);
    }
    return pokemonArr


}
