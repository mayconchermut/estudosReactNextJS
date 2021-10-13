import Filho from "./Filho";

export default function Pai(props){
    function falarComigo(param){
        console.log(param)
    }
    return (
        <div>
            <h1><Filho funcao={falarComigo}/> </h1>
        </div>
    )
}