function gerarLista(final = 5){
    const lista = [];
    for(let i = 1; i<=final; i++){
       lista.push(<span>{i}, </span>);
    }
    return lista;
    
}
export default function lista1(){

    return(
        <div>
            <div>
            {gerarLista()}
            </div>
            <div>
            {gerarLista(12)}
            </div>

        </div>

    )
}