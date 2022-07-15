export const ToLocalStorage = (pokemon) => {
    localStorage.setItem(`${pokemon}`, JSON.stringify(pokemon));

}