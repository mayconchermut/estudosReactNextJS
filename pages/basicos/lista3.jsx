function gerarLista(){
    for(const i = 0; i<10;i++){
        return <span>i, </span>
    }
    
}
export default function lista1(){

    return(
        <div>
            {gerarLista()}
        </div>
    )
}