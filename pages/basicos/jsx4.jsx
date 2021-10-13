export default function jsx4(){
    const subtitulo = "Estou no JS!";
    return(
        <div>
            <h1>Integração JS e JSX</h1>
            <h1>{subtitulo}</h1>
            <h3>{3*3}</h3>
            <h2>{entre(10, 5, 9)}</h2>
        </div>
    )
}

function entre(valor, min, max){
    if(valor >= min && valor <= max){
        return "sim";
    }else{
        return "nao";
    }
}