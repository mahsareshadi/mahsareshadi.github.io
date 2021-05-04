import {Vertical} from "./Vertical"
import "./menu.css"
function SetVal (props){
    return(
        <div >
            <a href={props.link}>{props.children}</a>
        </div>
    )
}
export function Menu(){
    return(
        <div id="lmenu">
        <SetVal link="#About"><Vertical vertical="Mahsa Reshadi"/></SetVal>
        <SetVal link="https://github.com/mahsareshadi"><img className="social-media-logo" src="./assets/icon/github.png" alt="png"/></SetVal>
        <SetVal link="https://www.linkedin.com/in/mahsa-reshadi-44646620b/"><img className="social-media-logo" src="./assets/icon/linkedin.png" alt="png"/></SetVal>
        <SetVal link="https://twitter.com/mahsareshadi"><img className="social-media-logo" src="./assets/icon/twitter.png" alt="png"/></SetVal>
        </div>
    )

}