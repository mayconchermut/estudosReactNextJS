function acao1() {
    console.log("Acao #1");
}

export default function botao(){
    return(
        <div>
            <button onClick={acao1}>Click #1</button>
        </div>
    )
}