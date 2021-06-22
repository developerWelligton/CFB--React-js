 
import React, {Component} from 'react';
import ListAuth from './ListAuth'  


class Autenticacao extends Component{  
    constructor(props){
        super(props);  
        this.state = {
            usuario:"",
            senha:"",
            listaCadastro:new Array() 
        } 
    }  

    //set
    inserirLogin = (e) => 
    {
        console.log(e.target.value);//PROPRIEDADE DO EVENTO
        //setTexto
        this.setState({    
            usuario: e.target.value
        })
    };
    //set
    inserirSenha = (e) => 
    { 
        this.setState({    
            senha: e.target.value
        })
    };

    //set
    cadastrar = (e) =>{ 
        this.setState({ 
            listaCadastro:[...this.state.listaCadastro, this.state.usuario,this.state.senha] 
            }) 
    }
      
    render(){ 
        return ( 
          <div className= "container">
               <h1> Meu app </h1>
               <label>Login</label>
               <input type = "text"
                
                value={this.state.usuario} 
                    onChange={(e)=>{  
                         this.inserirLogin(e)  
                    }} 
               />

               <label>Senha</label>
               <input type = "text"
                 value={this.state.senha} 
                    onChange={(e)=>{  
                         this.inserirSenha(e)  
                    }}  
               /> 
               <div> 
                   <button 
                   onClick={()=> {//INTERFACE ADICIONAR TAREFA 
                       this.cadastrar()
                       }}>
                    <p>Cadastrar</p>
                   </button>
               </div>
               <div> 
                <ListAuth  cadastros = {this.state.listaCadastro}></ListAuth> 
                </div>   
          </div>    
        )
    }
}

export default Autenticacao;