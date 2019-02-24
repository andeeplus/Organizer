import glamorous from 'glamorous'
import { css } from 'glamor'

const flexRowCenter = { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}
const flexColCenter = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}

const darkMain = '#1e0411'
const darkMainAlpha = 'rgba(30, 4, 17, 0.18)'
const midMain = '#f3f8ff'
const lightMain = '#fdf0f6'
const boxShadow = `4px 2px 10px 0px ${darkMainAlpha}`
const backGround = '#408ab4'
const midBackGround = '#c2cfe2'
const lightBackGround = '#fefeff'
const italic300 = { fontWeight: 400, /*fontStyle: 'italic'*/}

const color = {darkMain, darkMainAlpha, midMain, lightMain, backGround, midBackGround, lightBackGround}

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

const FlexHorizontal = glamorous.div({
  ...flexRowCenter,
  justifyContent: 'space-between',
  width: '100%'

})

const PostControls = glamorous.div({
  ...flexRowCenter,
  justifyContent: 'flex-end',
  width: '96%'
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
  lineHeight: '0px',
  padding: '0 5px',
  boxShadow: boxShadow,
  margin: '8px auto',
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
  padding: 6,
  '&:last-child ':{
    paddingBottom: 80
  },
  '&::-webkit-scrollbar':{
    backgrounColor: darkMain,
    width:6
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor:midMain,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: midBackGround,
    borderRadius:5,
    backgroundClip: 'content-box',
    border:`1px solid ${lightMain}`
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
  backgroundColor: lightBackGround,
  display: 'inline-block',
  margin: 4,
  borderRadius: 5,
  boxShadow: boxShadow,
  border: `1px solid ${midMain}`,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0
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

const ButtonIcon = glamorous.button({
  lineHeight: 1.3,
  outline: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  color: lightMain,
  padding: '2px 6px',
  fontSize: 14,
  cursor: 'pointer'
})

const Button = glamorous.button({
  lineHeight: 1.3,
  outline: 'none',
  backgroundColor: darkMain,
  border: midMain,
  color: lightMain,
  borderRadius: 5,
  padding: '5px 8px',
  fontSize: 12,
  cursor: 'pointer',
  boxShadow: boxShadow,
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

const AddTodoBlock = glamorous.div({
  maxWidth: '350',
})

const Form = glamorous.form({
  ...flexColCenter,
  minWidth: 372,
  margin: '25px 0',
  padding: 6,
  paddingTop: 0,
  backgroundColor: lightBackGround,
  boxShadow: boxShadow,
  borderRadius: 5
})

const TextArea = glamorous.textarea({
  width: '100%',
  height: 100,
  backgroundColor: lightBackGround,
  padding: 5,
  border: 'none',
  boxSizing: 'border-box',
  textAlign: 'center',
  color: darkMain,
  fontSize: '12px',
  resize: 'none',
  outline: 'none'
})

const TodoKind = glamorous.h1({
  color: lightMain,
  backgroundColor: darkMain,
  fontSize: 11,
  textAlign: 'center',
  margin: 0,
  padding: 3
})

export { 
  color,
  TextArea, Form, Time, TodoKind, AddTodoBlock, 
  FlexHorizontal, FlexVertical, AppWrapper, WorkAreaBlock, 
  ListWrap, TodoBar, TodoItem, TodoList, PostControls,
  ButtonIcon, Button, ButtonPriority 
} 