function Content(props) {
    return (
        <>
            <div style={{border:"2px solid black" , width:"400px"}}>
                <h1>{props.header}</h1>
                <div>
                    {props.children}
                </div>
            </div>
        </>

    )
}


export function Resume() {
    return (<>
    <Content header="About Me">
            <p>This is About Me</p>
        </Content>
        <Content header="portfolio">
            <p>here is my portfolio (another component)</p>
        </Content>
        <Content header="Education">
            <p>This is my education</p>
        </Content>
        <Content header="skills">
            <p>This is my skills</p>
        </Content>
        <Content header="Contact me">
            <p>my email and phone number</p>
        </Content>
        
    </>);
}