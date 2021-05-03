import "./content.css"
function Content(props) {
    return (
        <>
            <div className="body-content">
                <a name={props.point}></a>
                <p className="content-header"><b>{props.header}</b></p>
                <div>
                    {props.children}
                </div>
            </div>
        </>

    )
}


export function Resume() {
    return (
        <div className="body-content">
            <Content point="about" header="Mahsa Reshadi">
                <div>test</div>
            </Content>
            <Content point="Projects" header="Portfolio">
                <div>here is my portfolio (another component)</div>
            </Content>
            <Content point="Education" header="Education">
                <div>This is my education</div>
            </Content>
            <Content point="Skils" header="Skills">
                <div>This is my skills</div>
            </Content>
            <Content point="Contact" header="Contact Me">
                <div>

                </div>
            </Content>

        </div>
    );
}