import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm'
import WorkArea from '../WorkArea/WorkArea'
import {WorkAreaBlock, AppWrapper} from './AppGlam'

const dummyTodos = [
{id: 0, priority: 1, text: 'Add your todo down here', isCompleted: false, onGoing: false, time: new Date().toLocaleString()},
{id: 1, priority: 2, text: 'Ongoing todos', isCompleted: false, onGoing: true, time: new Date().toLocaleString()},
{id: 2, priority: 0, text: 'Completed todos', isCompleted: true, onGoing: false, time: new Date().toLocaleString()}]

function App(){
  let localTodo;

  if (JSON.parse(localStorage.getItem("todos")) === null){
    localStorage.setItem('todos', JSON.stringify(dummyTodos))
  }
  
  localTodo = [JSON.parse(localStorage.getItem("todos"))]

  if (localTodo[0].length >=1){
    localTodo = [...JSON.parse(localStorage.getItem("todos"))]
  } 

  const [todos, setTodos] = useState([...localTodo])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const addTodo = text => {
    const idPicker = todos[todos.length-1] ? todos[todos.length-1].id +1 : 0
    const lastTodo = {id: idPicker, priority:0, text:text, isCompleted:false, onGoing: false, time: new Date().toLocaleString()}
    const newTodos = [...todos, lastTodo]
    setTodos(newTodos)
  }
  
  const completeTodo = id => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].isCompleted = true
    newTodos[index].priority = 0
    setTodos(newTodos)
  }

  const recoverTodo = id => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].isCompleted = false
    newTodos[index].priority = 2
    newTodos[index].onGoing = !newTodos[index].onGoing
    setTodos(newTodos)
  }

  const removeTodo = id => {
    const newTodos = [...todos] 
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  const ongoingTodo = id => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].onGoing = !newTodos[index].onGoing
    newTodos[index].isCompleted = false
    setTodos(newTodos)
  }

  const setPriority = (id, priority) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].priority = priority
    setTodos(newTodos)
  }

  const updateStatus = (id, type) => {
    
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id.toString() === id)

    switch(type){
      case 'todo':
      newTodos[index].isCompleted = false
      newTodos[index].onGoing = false
      break
      case 'ongoing':
      newTodos[index].isCompleted = false
      newTodos[index].onGoing = true
      break
      case 'done':
      newTodos[index].isCompleted = true
      newTodos[index].onGoing = false
      break
      default: console.log('error');
    }
    
    console.log(newTodos)
    setTodos(newTodos)
    
  }

  const functionProps = {recoverTodo,completeTodo,removeTodo,addTodo,updateStatus,ongoingTodo, setPriority}

  return (
    <AppWrapper>
      <WorkAreaBlock>
        <WorkArea id="todo" todos={todos.filter(item => !item.isCompleted && !item.onGoing)} action={{...functionProps}} status={updateStatus}>To Do</WorkArea>
        <WorkArea id="ongoing" todos={todos.filter(item => !item.isCompleted && item.onGoing)} action={{...functionProps}} status={updateStatus}>Ongoing</WorkArea>
        <WorkArea id="done" todos={todos.filter(item => item.isCompleted)} action={{...functionProps}} status={updateStatus}>Complete</WorkArea>
      </WorkAreaBlock>
      <TodoForm addTodo={addTodo}/>
    </AppWrapper>
  )
}
export default App;
