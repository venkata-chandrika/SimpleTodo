// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props

  const deleteToBe = () => {
    deleteTodo(eachTodo.id)
  }
  return (
    <li className="each-todo">
      <p className="para">{eachTodo.title}</p>
      <button className="button" type="button" onClick={deleteToBe}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
