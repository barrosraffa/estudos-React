import React, {createContext, useState} from 'react'

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
   const [tasks, setTasks] = useState([
        {Task: 'Read the book', id: 1},
        {Task: 'Wash the car', id: 2},
        {Task: 'Write some code', id: 3}
    ]);

    return (
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )
};

export default TaskListContextProvider;