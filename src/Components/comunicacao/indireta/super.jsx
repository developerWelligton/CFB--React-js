import React,   {useState} from 'react'
import Sub from './sub'
/* É possível criar um dado mutável que altere as propriedades com useState
  */

export default (props) =>{
    const [num, setNum] = useState(0);
    const [Texto, setTexto] = useState('Valor');

    function quandoClicar(valorGerado,Texto){

        setNum(valorGerado);
        setTexto(Texto)
       
    }

    return (
        <div>
        <h4>{Texto} = {num}</h4>
        <Sub onClick = {quandoClicar}> </Sub> 
        </div>
    )
}
    