import { useState } from "react"
import ContadorDisplay from "../../components/indireta1/ContadorDisplay"


export default function contador(){

    const [x, setX] = useState(0)
    
    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#222", 
        color: "#fff",
        height: "100vh"}

        const dec = () => setX(x - 1)
        const inc = () => setX(x + 1)

    return(
        <div style={estilo}>
            <h1>Contador</h1>
            <ContadorDisplay x={x} />
            <div>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>

            </div>

        </div>
    )
}