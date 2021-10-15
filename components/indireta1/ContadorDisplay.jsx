import { useState } from "react"

export default function ContadorDisplay(props){

    
    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px",
        borderRadius: "50px",
        backgroundColor: "#fff",
        color: "#222",
        fontSize: "2rem",
        margin: "20px"

    }

    return(
        

        <div style={estilo}>
            {props.x}
        </div>
    )
}