 
import React, {Component} from 'react';
import Lista from './lista' 
 

class Tarefa extends Component{  
    constructor(props){
        super(props); 
//Uso do state: Quando um valor é mutável 
//INICIALIZA AS VARIAVEIS DE ESTADO
        this.state = {
            texto:"",
            lista:new Array() 
        } 
    }
    
    //INTERFACE
    //(SET)CONFIGURANDO ESTADO DA PROPRIEDADE TEXTO
    alterarTexto = (e) => 
    {
        console.log(e.target.value);//PROPRIEDADE DO EVENTO
        //setTexto
        this.setState({    
            texto: e.target.value
        })
    };



    //(SET) ARMAZENA TEXTO NA LISTA
    //ESTADO DO COMPONENTE É IMUTÁVEL
    //NAO PODE ALTERAR O VALOR DO ESTADO DIRETAMENTE
    adicionaTarefa=(e)=>{
        this.setState({
            //
            lista:[...this.state.lista, this.state.texto]
        })
    }

      
    render(){
        console.log(this.state.lista);
        return ( 
          <div className= "container">
               <h1> Meu app </h1>
               <input type = "text" 
                    value={this.state.texto} //GET DO INPUT
            // FUNÇÃO 'onChange' PARA ALTERAR ESTADO
                    onChange={(e)=>{ 
            //INTERFACE ALTERAR TEXTO
            //IMPLEMENTAÇÃO OBRIGATÓRI
            //A FUNÇÃO DEVE CONTER A REGRA PARA ALTERAR O ESTADO
                         this.alterarTexto(e)  
                    }}
               />
                
               <div> 
                   <button onClick={()=> {//INTERFACE ADICIONAR TAREFA 
                       this.adicionaTarefa()
                       }}>
                    <p>Adicionar</p>
                   </button>
               </div>  
               <div> 
                <Lista  tarefas = {this.state.lista}></Lista>
                
                </div>  
          </div>   
          
        )
    }
}

export default Tarefa;