import './App.css';
import { useReducer } from 'react';
const initialTaskState ={
  count:0
}
const reducer = (state,action)=>{
  if(action.type === 'add'){
    return state +1
  }
  if (action.type === 'delete') {
    return state  - 1;
  }
  if (action.type === 'deleteAll') {
    return state  = 0;
  }
  return state 
}
function App() {
  const [taskState , dispatch] = useReducer(reducer, initialTaskState.count)
  return (
    <div className="App">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({ type: 'add' })} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({ type: 'delete' })} id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({ type: 'deleteAll' })} id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState }</h3>
    </div>
  );
}

export default App;
