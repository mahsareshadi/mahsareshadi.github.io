import { Resume } from "./Content"
import "./app.css"
import { Navigation } from "./nav"
import { Menu } from "./menu"
import Image from "./image"
import { Myprojects } from "./portfolio"

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