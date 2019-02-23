import React, {useState} from 'react';
import { Input, Form} from '../App/AppGlam'

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return;
    addTodo(value)
    setValue('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        className="input" 
        value={value} 
        placeholder="What's next?"
        onChange={e => setValue(e.target.value)} />
    </Form>
  )
}

export default TodoForm