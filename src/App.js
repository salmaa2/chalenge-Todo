import './App.css';
import { useState } from 'react';
import List from './TodoList';
import AddTo from './AddTodo';

function App() {
  const [todo, setTodo] = useState([{ id: 0, task: "eat", done: false }, { id: 1, task: "sleep", done: false }, { id: 2, task: "repeat", done: false }])


  function Delete(id) {
    setTodo(todo.filter(el => el.id !== id))
  }
  function Done(id) {
    setTodo(todo.map(el => el.id === id ? { ...el, done: !el.done } : el))
  }
  function Add(newTodo) {
    setTodo([...todo, newTodo])
  }

  return (
    <div className="App">
      <AddTo Add={Add}></AddTo>
       <List todo={todo} Delete={Delete} Done={Done}  ></List>


    </div>

  );

}

export default App;
