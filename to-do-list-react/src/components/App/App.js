import React from 'react';
import './App.scss';
import city from '../../assets/mar.jpg';


//limpando o input de tarefas
// deletando uma tarefa   
// concluindo uma tarefa
// concluindo todas as tarefas
// desmarcando todas as tarefas
// removendo todas as tarefas
// Adiciona o atributo que permite a movimentação
//elemento pode ser arrastado (guarda a classe numa variável)



let App = () => {
    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');

        //adicionando tarefas
    }

   return(
      <section className="container">
        <div className="todo-list">
            <div className="img-header">
                <img src={city} id="imagem"></img>
            </div>
            <div className="header">
                <input placeholder="Nova Tarefa" className="task-title" type="title"></input>
                <button onClick={handleClick}>add</button>
                </div>
            <div>
                <ul>
                    <li className="li-not-selected">oi<span>x</span></li>
                   
                </ul>
                
            </div>
        </div>
      </section>
   )
};

export default App
