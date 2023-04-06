import {Component} from 'react'

// Write your code here

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    usersTodoList: initialTodosList,
  }

  deleteTodo = id => {
    const {usersTodoList} = this.state
    const filteredTodo = usersTodoList.filter(each => each.id !== id)
    this.setState({usersTodoList: filteredTodo})
  }

  render() {
    const {usersTodoList} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo-container">
            {usersTodoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                eachTodo={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
