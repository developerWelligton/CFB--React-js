import React from 'react'
import Dados from '../Dados/Dados'
 

export default function Corpo(){
    const professor ="Parece com bebê";
    const cnl = 'CFB cursos'
    const yt = 'CFB cursos'
    const crs = 'Curso de React'
    return(
        <section>
            <h1>Titulo</h1>
            <p>Parágrafo</p>
            <Dados canal= {cnl} youtube = {yt} curso = {crs}></Dados>
        </section>
    )
}

 