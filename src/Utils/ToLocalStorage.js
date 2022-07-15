export const ToLocalStorage = (pokemon) => {

    localStorage.setItem("favorites", JSON.stringify(pokemon));

}