export const toLocalStorage = (pokemon) => {
        localStorage.setItem(`${pokemon}`, JSON.stringify(pokemon));
}