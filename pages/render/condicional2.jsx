import If from "../../components/if";

export default function condicional1(){
    const numero = 1;
    return(
        <div>
            <If teste={numero % 2 === 0}>
                <h1>O numero é par</h1>
            </If>
        </div>
    )
}