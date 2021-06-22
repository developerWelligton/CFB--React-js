import React, {Component} from 'react';
 import "../../Components/Auth/css/styles.css"
 
//IMPRIME DADOS DO ARRAY
class ListAuth extends Component{
    render(){
        return(
            <div> 
                <p> 
                { 
                        this.props.cadastros.map((cadastros, i) => {
                            return(
                                <div className = "listarCadastrados" key={i}> 
                                        {cadastros}     
                                </div>
                                 
                            )
                        })
                    
                    }
                </p>
            </div>
        )
    }
}
export default ListAuth;