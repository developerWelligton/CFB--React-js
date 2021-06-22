import React, {useState} from 'react'


export default (props) =>
{
    const[nome, alteraNome] = useState("Pedro")
    return(
        //O valor está amarrado com o estado do seu componente
        //Direção: estado ---> interface(atualizada)
        <>
            <h5>{nome}</h5>
            <input type="text" value={nome} 
                onChange={e => alteraNome(e.target.value)}
            />
        </>
    )
}