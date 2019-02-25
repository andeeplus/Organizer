import React, {useState} from 'react';
import { TextArea, Form, ButtonIcon, Button, ButtonPriority, TodoBar, PostControls, color} from '../../styles/emotion'

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')
  const [severity, setSeverity] = useState(0)
  const [activeBtn, setActiveBtn] = useState(0)

  const handleSubmit = e => {
    console.log(value)
    e.preventDefault()
    if(!value) return;
    addTodo(value,severity)
    setValue('')
    setActiveBtn(0)
  }

  const handleActiveButton = e => {
    e.preventDefault()
    console.log(e.target.name)
    const activeBtn = e.target.name
    setActiveBtn(activeBtn)
    setSeverity(parseInt(activeBtn))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TodoBar>
        <div>
          <ButtonPriority 
          name="0"
          style={{fontWeight: 300, fontStyle: 'italic', color: activeBtn === '0' ? 'yellow' : color.lightMain}} 
          onClick={(e) => handleActiveButton(e)}>1
          </ButtonPriority>
          <ButtonPriority 
          name="1"
          style={{fontWeight: 400, color: activeBtn === '1' ? 'yellow' : color.lightMain}} 
          onClick={(e) => handleActiveButton(e)}>2
          </ButtonPriority>
          <ButtonPriority
          name="2"
          style={{fontWeight: 700, fontStyle: 'bold', color: activeBtn === '2' ? 'yellow' : color.lightMain}} 
          onClick={(e) => handleActiveButton(e)}>3
          </ButtonPriority>
        </div>
        <ButtonIcon onClick={() => setValue('')}>⌫</ButtonIcon>
      </TodoBar>
      <TextArea 
        type="text" 
        value={value} 
        placeholder="What's next?"
        onChange={e => setValue(e.target.value)} />  
      <PostControls>
        <Button type="submit">Submit</Button>  
      </PostControls>
    </Form>
  )
}

export default TodoForm