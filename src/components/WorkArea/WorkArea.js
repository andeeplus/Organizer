import React from 'react'
import { ListWrap, TodoList, TodoKind } from '../App/AppGlam'
import Droppable from '../DragAndDrop/Droppable/Droppable'
import Todo from '../Todo/Todo'

const WorkArea = (props) => {

  const {todos, action, id, status} = props

  return (
    <ListWrap id={id}>
    <TodoKind>{props.children}</TodoKind>
      <Droppable status={status} >
        <TodoList>
          {todos.map((todo,index) =>(
            <Todo 
            key={index}
            id={todo.id}
            status={action.updateStatus}  
            index={todo.id} 
            todo={todo} 
            editTodo={todo.isCompleted ? action.recoverTodo : action.completeTodo} 
            removeTodo={action.removeTodo}
            ongoingTodo={action.ongoingTodo}
            setPriority={action.setPriority}
            />
          ))}
        </TodoList>
      </Droppable>
    </ListWrap>
  )
}

export default WorkArea