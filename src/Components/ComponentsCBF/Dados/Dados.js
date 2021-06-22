import React from 'react'

export default function Dados(props){
    const n1 = 10;
    const n2 = 20;

 

    return(
        <section>
        <p>Canal: {props.canal}</p>
        <p>Youtube: {props.youtube}</p>
        <p>Curso: {props.curso}</p>


        </section> 
    ) 
}
//app =>  corpo  => dados

//APP: <Corpo></Corpo>


/*          const tm = ()=>{
                 return  'Enviando funções para os componentes'
            }
*/
//CORPO: <Dados curso={professor} tema={tm}> </Dados>

 

//DADOS: <p>ORIENTAÇÃO A OBJETOS: {props.tema()}</p>