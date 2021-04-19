import "./nav.css"
function Nav(props) {
    return (

        <li><a className="links" href={"#" + props.link}>{props.children}</a></li>

    )
}

export function Navigation() {
    return (
        <ul className="list">
            <Nav link="about"><b>About</b></Nav>
            <Nav link="Education">Education</Nav>
            <Nav link="Work">Work</Nav>
            <Nav link="Projects">Projects</Nav>

        </ul>
    )
}