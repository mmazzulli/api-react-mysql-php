import React from 'react'
import Tabela from './Tabela'


export default class App extends React.Component
{

constructor()
{
    super();
    this.state = ({
        db: []
    });
    this.exibeCarros();
}

exibeCarros()
{
    fetch("http://127.0.0.1/reactphp/mysqlreact/src/api/")
    .then((response)=>response.json())
    .then((responseJson)=>
    {
        this.setState({
            db: responseJson
        });
        console.log(this.state.db)
    }
    )
}

render(){
     return (
     <div>
         <Tabela arrayCarros={this.state.db}></Tabela>
     </div>
     )
}

}


// export default App => 
//     <div>
//        <Tabela arrayCarros={this.state.db}></Tabela>
//     </div>