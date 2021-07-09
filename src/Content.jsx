import "./content.css"
import {Myprojects} from "./portfolio"
function Content(props) {
    return (
        <>
            <a name={props.point}/>
            <div className="body-content">
                <p className="content-header"><b>{props.header}</b></p>
                <div className="info">
                    {props.children}
                </div>
            </div>
        </>

    )
}


export function Resume() {
    return (
        <>
        <a name="About"></a>
        <div className="body-content">
            <Content header="Mahsa Reshadi">
                <div>Front-End Developer 
                </div>
            </Content>
            <Content point="Projects" header="Portfolio">
                <Myprojects/>
            </Content>
            <Content point="Education" header="Education">
                <div>Bachelor Of Science Software Engineering <br/>At University Of Najafabad<br/>
                &#9632; 2021 &#9632;
                </div>
            </Content>
            <Content point="Skills" header="Skills">
                <table className="table-of-skills">
                    <tr>
                        <td>&#9654; HTML</td>
                        <td>&#9654; CSS </td>
                        <td>&#9654; Bootstrap</td>
                    </tr>
                    <tr>
                        <td>&#9654; JavaScript</td>
                        <td>&#9654; jQuery </td>
                        <td>&#9654; React </td>
                    </tr>
                    <tr>
                        <td>&#9654;Node.js</td>
                        <td>&#9654; Java </td>
                        <td>&#9654; Git </td>
                    </tr>
                    <br/>
                    <tr>
                        <td>&#9650; Visual Studio Code</td>
                        <td>&#9650; WebStorm </td>
                        <td>&#9650; Dreamweaver</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>&#9650; NetBeans </td>
                        <td></td>
                    </tr>
                </table>
            </Content>
            <Content point="Contact" header="Contact Me">
                <table className="table-of-contact">
                    <tr>
                        <td><img className="contact-png" src="./assets/icon/email.png" alt="email-png" /></td>
                        <td><span>Mahsa[at]Reshadi[dot]com</span></td>
                    </tr>
                    <tr>
                        <td><img className="contact-png" src="./assets/icon/pin.png" alt="phone-png" /></td>
                        <td><span>Sunnyvale - California</span></td>
                    </tr>
                </table>
            </Content>
        </div>
        </>
    );
}