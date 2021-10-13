import Filho from "./Filho";

export default function Pai(props){
    return (
       <div>
           <Filho familia={props.familia} nome="Carlos "/>
           <Filho familia={props.familia} nome="Maycon "/>
           <Filho familia={props.familia} nome="Roana "/>
           
       </div>
    
    )
}