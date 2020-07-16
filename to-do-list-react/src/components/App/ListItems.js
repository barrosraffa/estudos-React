import React, {Component} from "react";


   //adicionando tarefas
class ListItems extends Component {
    constructor(props){
            super(props);
            this.state = {items:[props.entries]};
            this.createTasks = this.createTasks.bind(this);
            // this.toggleClass = this.toggleClass.bind(this);
    }

    createTasks(item){
        console.log("create")
        // return <li>{item.text}

        return <li className={item.active ? 'li-select': null} 
        onClick={() => this.toggleClass(item)} key={item.key}>{item.text}

        <button onClick={() => this.delete(item.key)} key={item.key}>x</button>

        </li>
    }
    // deletando uma tarefa   
    delete(key){
		this.props.delete(key);
    }

    //clicando na tarefa e mudando classe
    toggleClass(item) {
        console.log(item)
        console.log(item.active)
        item.active = !item.active;
    };

    render(){
		var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

		return(
			<ul>
                {listItems}
			</ul>
		);
	}
};

export default ListItems;


        //   {/* <button  onClick={() => this.delete(item.key)} key={item.key} id="exluir">x</button> */}

        // const tarefaClick = this.state.active;
        // this.setState({ active: !tarefaClick });