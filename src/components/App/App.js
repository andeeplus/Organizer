import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm'
import WorkArea from '../WorkArea/WorkArea'
import {WorkAreaBlock, AppWrapper} from '../../styles/emotion'

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

  const addTodo = (text,priority) => {
    const time = new Date().toLocaleString()
    const idPicker = todos[todos.length-1] ? todos[todos.length-1].id +1 : 0
    const lastTodo = {id: idPicker, priority: priority, text:text, isCompleted:false, onGoing: false, time: time}
    const newTodos = [...todos, lastTodo]
    setTodos(newTodos)
  }
  
  const completeTodo = id => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].isCompleted = true
    newTodos[index].onGoing = false
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
    
    const cleanId = id.split('item')[1].toString()
    const index = newTodos.findIndex(todo => todo.id === parseInt(cleanId))
    console.log(id,cleanId,index)
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
    
    setTodos(newTodos)
    
  }

  const functionProps = {recoverTodo,completeTodo,removeTodo,addTodo,updateStatus,ongoingTodo, setPriority}
  const sortedTodo = todos.filter(item => !item.isCompleted && !item.onGoing).sort((a,b) => b.priority - a.priority)
  const sortedOngoing = todos.filter(item => !item.isCompleted && item.onGoing).sort((a,b) => b.priority - a.priority)
  const sortedComplete = todos.filter(item => item.isCompleted).sort((a,b) => b.priority - a.priority)
  
  return (
    <AppWrapper>
      <WorkAreaBlock>
        <WorkArea id="todo" todos={sortedTodo} action={{...functionProps}} status={updateStatus}>To Do</WorkArea>
        <WorkArea id="ongoing" todos={sortedOngoing} action={{...functionProps}} status={updateStatus}>Ongoing</WorkArea>
        <WorkArea id="done" todos={sortedComplete} action={{...functionProps}} status={updateStatus}>Complete</WorkArea>
      </WorkAreaBlock>
      <TodoForm addTodo={addTodo}/>
    </AppWrapper>
  )
}
export default App;
