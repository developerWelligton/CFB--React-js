import React from 'react' 
import Primeiro from './Components/basico/Primeiro'
import ComParametro from './Components/basico/ComParametro'
import Comfilhos from './Components/basico/ComFilhos'
import Card from './Components/layout/Card/Card'
import Repeticao from "./Components/basico/repeticao"
import Condicional from "./Components/basico/Condicional"
import CondicionalIF from "./Components/basico/CondicionalComIf"
import Pai from './Components/comunicacao/direta/pai'
import Super from './Components/comunicacao//indireta/super'
import Imput from './Components/forms/input'
import Contador from './Components/Contador/contador'
import Header from './Components/ComponentsCBF/Header/Header'
import Corpo from './Components/ComponentsCBF/Corpo/Corpo'
import Dados from './Components/ComponentsCBF/Dados/Dados'
import './index.css'; 
import './App.css'
 
export default (props) => {  
  //aula6
    const cnl = 'CFB cursos'
    const yt = 'CFB cursos'
    const crs = 'Curso de React'
  return(  
    <> 
    
    <div className = "app" id = "app" >
    <h1>Fundamentos React</h1>

    <div className = "Cards">
         <Card titulo="#13 - Dados CFB aula 6" color="">
         
               <Dados canal= {cnl} youtube = {yt} curso = {crs}></Dados>
        </Card>

        <Card titulo="#12 - Corpo CFB aula 5" color="">
               <Corpo></Corpo>
        </Card>

        <Card titulo="#11 - header CFB aula 5" color="">
              <Header></Header> 
        </Card> 

        <Card titulo="#10 - Contador" color="#BBB942">
              <Contador passo={10} valor={100}></Contador>
        </Card> 

        <Card titulo="#09 - Input" color="#AAA582">
              <Imput></Imput>
        </Card> 

        <Card titulo="#08 - Comunicação indireta" color="#FA5582">
              <Super></Super>
        </Card> 

        <Card titulo="#07 - Comunicação direta" color="#FA5882">
                <Pai sobrenome="Santos"></Pai>
        </Card>

        <Card titulo="#06 - Condicional com If v2" color="#d69cbc">
                <CondicionalIF numero={10}></CondicionalIF>
        </Card>

        <Card titulo="#05 - Condicional v1" color="#fe4a49">
                <Condicional numero = {11}></Condicional>
        </Card>

        <Card titulo="#04 - Componentes List" color="#fed766">
                <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componentes com filhos" color =" #3b7dd8">
                <Comfilhos>
                  <ul>
                    <li>Ana</li>
                    <li>Bireca</li>
                    <li>Welligton</li>
                  </ul>
                </Comfilhos>
        </Card>

        <Card titulo="#02 - Componentes com parâmetro" classname = "app" color ="#343d46">
                <ComParametro 
                titulo = "Esse é um titulo"
                subtitulo = "Esse é um subtitulo"/>
        </Card>

        <Card titulo="#01 - Primeiro componenteX" color ="#8d5524 "><Primeiro/>
        </Card> 
    </div>
      </div> 
    </>
  )}





















  // <Dados curso={professor} tema='POO'></Dados>

  //colocarei dentro do componente corpo

 

 /*aula passada
 import Relogio from './Components/Relogio/Relogio'

const textoDestaque = {
    color:'#00f',
    fontSize:'3em'
  } 

 return  
    <section className="caixa">
    <Relogio></Relogio> 
     <h1 style={{color:'#f00', fontSize:'5EM'}}>Meu título</h1>
    <p style={textoDestaque}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p className='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <a >Home</a>
    </section>
    
    css

    .texto{
  color: #555;
  font-size: 7em;
}
.caixa{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.caixa a{
  text-decoration: none;
  font-size: 100px;
  color: red;
}

.caixa a:hover{
background-color: aquamarine;
color: azure;
}
    */ 
