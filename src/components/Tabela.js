import React from 'react'

export default class Tabela extends React.Component{
        render(){
                return(        
                <div>
                <table className="tabelaCarros">
                <thead>
                <tr>
                <td>ID</td> 
                <td>Marca</td>  
                <td>Modelo</td>
                <td>Ano</td>
                </tr>
                </thead> 
                <tbody>
        {this.props.arrayCarros.map(
                row=>
               <tr key={row.id}>
                <td>{row.id}</td> 
                <td>{row.Marca}</td>  
                <td>{row.Modelo}</td>
                <td>{row.Ano}</td>
               </tr>
              )}
              </tbody></table>    
        }
               </div>
         )}
               
}

// export default Tabela =>
// <div>

// </div>