import { Resume } from "./Content"
import "./App.css"
import { Navigation } from "./nav"
import { Menu } from "./menu"
import Image from "./image"

function App() {
    return (
        <div className="cnt">
            <div id="nav"><Navigation></Navigation></div>
            <div id="img" ><Image></Image></div>
            <div id="menu" ><Menu></Menu></div>
            <div id="resume" ><Resume></Resume></div>
        </div>
    );
}


export default App;