import './App.css'
import { Typography, Divider } from 'antd'
import FilterTodo from './components/FilterTodo'
import TodoList from './components/TodoList'

const { Title } = Typography
function App() {
  return (
    <div style={{
      width: '500px',
      margin: '0px auto',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      boxShadow: '0 0 10px 4px #333',
      padding: 20,
      borderRadius: 5,
      height: '90vh'
    }}>
      <Title style={{textAlign:'center'}}>TODO APP & REDUX CORE</Title>
      <FilterTodo/>
      <Divider/>
      <TodoList/>
    </div>
  )
}

export default App