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
            <Content id="table" point="Contact" header="Contact Me">
                    <table className="table-of-contact">
                        <tr>
                            <td><img className="contact-png" src="./assets/icon/email.png" alt="email-png" /></td>
                            <td><span>Mahsa@Reshadi.com</span></td>
                        </tr>
                        <tr>
                            <td><img className="contact-png" src="./assets/icon/phone.png" alt="phone-png" /></td>
                            <td><span>‪(408) 548-7621</span></td>
                        </tr>
                    </table>
            </Content>
        </div>
    );
}