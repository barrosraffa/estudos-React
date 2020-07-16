import React from 'react';
import './App.scss';
import city from '../../assets/mar.jpg';
import ListItems from './ListItems';

//limpando o input de tarefas
// concluindo uma tarefa
// concluindo todas as tarefas
// desmarcando todas as tarefas
// removendo todas as tarefas
// Adiciona o atributo que permite a movimentação
//elemento pode ser arrastado (guarda a classe numa variável)


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {items:[]};
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }
   

    //adicionando tarefas
    addItem(e){
        if(this.inputElement.value !== ""){
            let newItem = {
                text: this.inputElement.value,
                key: Date.now(),
                active: true
            };
        
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        
            this.inputElement.value = "";
    };
    console.log(this.state.items);
	e.preventDefault();
    }

    // deletando uma tarefa   
    deleteItem(key){
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		
		this.setState({
			items: filteredItems
		});
	}
    

    render() {
        return(
            <section className="container">
                <div className="todo-list">
                    <div className="img-header">
                        <img src={city} id="imagem"></img>
                    </div>
                    <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this.inputElement = a} placeholder="Nova Tarefa" className="task-title" type="title"></input>
                        <button type="submit">add</button>
                    </form>
                    </div>
                    <div>
                        <ListItems entries={this.state.items} delete={this.deleteItem} />
                    </div>
                </div>
            </section>
        )
   };
}

export default App;

// deleteItem={this.deleteItem} setUpdate={this.setUpdate}

// let App = () => {
//     function botaoAdicionar(e) {
//         e.preventDefault();
//         console.log('O link foi clicado.');

        
//     }
