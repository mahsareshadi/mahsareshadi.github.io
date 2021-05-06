import "./portfolio.css"
function Portfolio(props){
    return(
    <>
        <a className="sites-link" href={props.link}>
            <img className="sites-image" src={props.image} alt="sitest-pic"/>
        </a>
    </>
    )
}
export function Myprojects(){
    const projects=[
        {
        image:"./assets/image/Cream Encouraging Mothers Day Instagram Post (3).png",
        link:"https://mahsareshadi.github.io/comeon/"
        },
        {
        image:"./assets/image/Cream Encouraging Mothers Day Instagram Post (2).png",
        link:"https://mahsareshadi.github.io/foodik/"
        }
        ];
    return(<>
        {projects.map(element=><Portfolio {...element}></Portfolio>)}
    </>)
}