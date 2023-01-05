import {SiGooglesearchconsole} from "react-icons/si";
import "../styles/utils.css";

export const NotFound = () => {
    return (
        <main style={{padding: "1rem"}}>
            <SiGooglesearchconsole className="centered not-found"/>
            <h1 className="message-not-found">404
                <br/>
                Page not found</h1>
        </main>
    )
}