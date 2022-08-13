import './App.css';
import Header from './Components/header';
import { Todo } from './Components/todo';
import { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    setTodo(myTodo.filter((ele) => {
      return ele !== todo
    }))
  }

  const addTodo = (todo) => {
    let sNo
    if (myTodo.length === 0) {
      sNo = 1;
    } else {
      sNo = myTodo[myTodo.length - 1].sNo + 1
    }
    const newTodo = { sNo: sNo, title: todo.title, task: todo.task }
    setTodo([...myTodo, newTodo])
  }
  const [myTodo, setTodo] = useState([])
  return (
    <>
      <Header />
      <Todo todo={myTodo} onDelete={onDelete} addTodo={addTodo} />
    </>
  );
}

export default App;
