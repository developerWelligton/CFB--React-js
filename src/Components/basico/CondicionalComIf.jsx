import If from  "./if"

//receber via props determinado numero
export default props => { 
    return(
        <div>
            <h2> O número é {props.numero}</h2> 
            <If test = {props.numero % 2 === 0}>
                <span>Par</span>
            </If>
            <If test = {props.numero % 2 === 1}>
                <span>ÍmPar</span>
            </If>
            
        </div>
    )
}