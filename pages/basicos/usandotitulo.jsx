import Titulo from '../../components/Titulo'

export default function usandoTitulo(){
    
    return(
        <div>
            <Titulo 
                principal="Página de Cadastro"
                secundario = "Incluir, alterar!"
            />
            <Titulo 
                principal="Página de Login"
                secundario = "Informe senha!"
            />
        </div>
    )
}