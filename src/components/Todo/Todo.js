import React from 'react';
import { Time, TodoBar, TodoItem, ButtonIcon, ButtonPriority } from '../../styles/emotion'
import Draggable from '../DragAndDrop/Draggable/Draggable'

function Todo({ todo, id, editTodo, removeTodo, ongoingTodo, setPriority}){
  return(
    <Draggable id={'item'+id} tag="notdrag">
      <TodoBar priority={todo.priority}>
        <div>
          <ButtonPriority priority={todo.priority} style={{fontWeight: 300, fontStyle: 'italic'}} onClick={() => setPriority(todo.id, 0)}>1</ButtonPriority>
          <ButtonPriority priority={todo.priority} style={{fontWeight: 400}} onClick={() => setPriority(todo.id, 1)}>2</ButtonPriority>
          <ButtonPriority priority={todo.priority} style={{fontWeight: 700, fontStyle: 'bold'}} onClick={() => setPriority(todo.id, 2)}>3</ButtonPriority>
        </div>
          <Time>{todo.time}</Time>
        <div>
          <ButtonIcon onClick={() => ongoingTodo(todo.id)}>{todo.onGoing ? '☜' : '✎'}</ButtonIcon>
          <ButtonIcon onClick={() => editTodo(todo.id)}>{!todo.isCompleted ? '✓' : '↻'}</ButtonIcon>
          <ButtonIcon onClick={() => removeTodo(todo.id)}>✗</ButtonIcon>
        </div>
      </TodoBar>
        <TodoItem todo={todo}>{todo.text}</TodoItem>
    </Draggable>
  )
}

export default Todo
