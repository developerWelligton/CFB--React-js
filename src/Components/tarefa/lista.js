import React, {Component} from 'react';
 

class Lista extends Component{
    render(){
        return(
            <div> 
                <ul>
                    { 
                        this.props.tarefas.map((tarefas, i) => {
                            return(
                                <div className = "listarTarefa">
                                    <li>
                                        {tarefas}
                                    </li>
                                </div>
                                 
                            )
                        })
                    
                    }
                </ul>
            </div>
        )
    }
}
export default Lista;