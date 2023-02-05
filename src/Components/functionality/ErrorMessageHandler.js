import {SiPokemon} from "react-icons/si";


export const ErrorMessageHandler = ({errorType}) => {

    return errorType === "failFetchingMainPage" ? <>
        <SiPokemon className="centered not-found"/>
        <h1 className="message-not-found">Unexpected Error, come back later</h1>
    </> : ""
}