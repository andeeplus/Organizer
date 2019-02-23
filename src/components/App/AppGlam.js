import glamorous from 'glamorous'
import { css } from 'glamor'

const flexRowCenter = { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}
const flexColCenter = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}

const darkMain = '#1e0411'
const darkMainAlpha = 'rgba(30, 4, 17, 0.18)'
const midMain = '#f3f8ff'
const lightMain = '#fdf0f6'
const boxShadow = `6px 4px 20px 2px ${darkMainAlpha}`
const backGround = '#408ab4'
const italic300 = { fontWeight: 400, /*fontStyle: 'italic'*/}

css.global('html, body', {
  backgroundColor: backGround,
  fontFamily: 'Open Sans, sans-serif',
  margin: 0
});

const AppWrapper = glamorous.div({
  ...flexColCenter,
  margin: '0 auto',
  marginTop: 20,
})

const FlexVertical = glamorous.div({
  label: 'draggerize',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: lightMain,
  maxWidth: '350',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${lightMain}`,
  borderRadius: '5px',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  lineHeight: '0px',
  padding: '0 5px',
  boxShadow: boxShadow,
  margin: '0 auto',
  marginTop: 6,
  
})

const TodoBar = glamorous.div(props => ({
  ...flexRowCenter,
  justifyContent: 'space-between',
  width: '100%',
  padding: '5px',
  height: '12px',
  border: `1px solid ${lightMain}`,
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  backgroundColor: props.priority === 2 ? 'red' : darkMain,
}))

const TodoList = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  height: 350,
  minWidth: 372,
  overflow: 'scroll',
  overflowX: 'hidden',
  '&:last-child ':{
    paddingBottom: 80
  }
})

const TodoItem = glamorous.div(props => ({
  textDecoration: props.todo.isCompleted ? 'line-through' : '',
  fontSize: '12px',
  padding: '5px',
  lineHeight: 1,
  height: 'auto',
  userSelect: 'text'
}))

const ListWrap = glamorous.div({
  backgroundColor: midMain,
  display: 'inline-block',
  margin: 4,
  borderRadius: 5,
  boxShadow: boxShadow,
  border: `1px solid ${midMain}`, 
})

const WorkAreaBlock = glamorous.div({
  ...flexRowCenter,
  flexWrap: 'wrap'
})

const Time = glamorous.p({
  ...italic300,
  padding: '0 5px',
  fontSize: 9,
  color: lightMain
})

const Button = glamorous.button({
  lineHeight: 1.3,
  outline: 'none'
})

function prioritySwitcher(type, id){
  
  switch (type){
    case 0: return lightMain
    case 1: return id === '2'  ? 'yellow' : lightMain
    case 2: return id === '3'  ? 'yellow' : lightMain
    default:
  }
}

const ButtonPriority = glamorous.button((props) => ({
  display: 'inline-block',
  backgroundColor: 'transparent',
  color: prioritySwitcher(props.priority, props.children),
  border: 'none',
  cursor: 'pointer',
  outline: 'none'
}))

const Form = glamorous.form({
  margin: '25px 0',
  padding: 0
})

const Input = glamorous.input({
  width: 360,
  padding: 5,
  borderRadius: 5,
  height: 50,
  textAlign: 'center',
  color: darkMain,
  fontSize: '16px',
  boxShadow: boxShadow
})

const TodoKind = glamorous.h1({
  color: lightMain,
  backgroundColor: darkMain,
  fontSize: 11,
  textAlign: 'center',
  margin: 0,
  padding: 3
})

export { Input, Form, Time, ListWrap, TodoBar, TodoItem, TodoList, TodoKind, Button, FlexVertical, WorkAreaBlock, AppWrapper, ButtonPriority } 