import React from 'react'
import Filho from './filho'

export default props =>
    <div>
      <Filho {...props}>Jõao</Filho>
      <Filho sobrenome={props.sobrenome }>Maria</Filho>
      <Filho sobrenome="Silva">Pedro</Filho>
    
    </div>