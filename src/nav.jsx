import "./nav.css"
function Nav(props) {
    return (

        <li><a className="a-links" href={"#" + props.link}>{props.children}</a></li>

    )
}

export function Navigation() {
    return (
        <div id="nav-links">
            <ul className="list">
                <Nav link="About"><b>About</b></Nav>
                <Nav link="Projects"><b>Projects</b></Nav>
                <Nav link="Education"><b>Education</b></Nav>
                <Nav link="Skills"><b>Skills</b></Nav>
                <Nav link="Contact"><b>Contact</b></Nav>
            </ul>
        </div>
    )
}