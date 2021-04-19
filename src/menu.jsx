import {Vertical} from "./Vertical"
import "./menu.css"
function SetVal (props){
    return(
        <div >
            <a href={"#"+ props.link}>{props.children}</a>
        </div>
    )
}
export function Menu(){
    return(
        <div>
        <SetVal link="l1"><Vertical vertical="Mahsa Reshadi"/></SetVal>
        <SetVal link="l2"><img className="logo" src="./assets/icon/github.png" alt="png"/></SetVal>
        <SetVal link="l2"><img className="logo" src="./assets/icon/linkedin.png" alt="png"/></SetVal>
        <SetVal link="l3"><img className="logo" src="./assets/icon/twitter.png" alt="png"/></SetVal>
        </div>
    )

}