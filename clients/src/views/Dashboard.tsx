import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'
import { deleteTodoApi, createTodoApi, retreiveTodosApi } from '../api/TodoApiService'
import { Todo } from '../models/Todo'

import TitleComponent from '../components/todo/Title'
import ButtonComponent from '../components/todo/Button'
import UpdateTodoModal from '../components/todo/UpdateTodoModal'
import TodoForm from '../components/todo/TodoForm'

export default function Dashboard() {
  const navigate = useNavigate()
  const authContext = useAuth()

  return (
    < div className='container mx-auto shadow-2xl md:my-6 bg-slate-100 rounded-lg pb-8' >
      <div className='bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% p-4 rounded-t-lg relative'>
        <TitleComponent />
        <h2 className="text-2xl text-center">{authContext.username}'s Dashboard</h2>
        <button className='absolute right-3 top-3' onClick={() => {
          authContext.logout()
          navigate('/')
        }}>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/17671/17671529.png" alt="" />
        </button>
      </div>
      <TodoTableComponent />
    </div >
  )
}

function TodoTableComponent() {
  const [todos, setTodos] = useState<Todo[]>([])
  const authContext = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  function refreshTodos() {
    retreiveTodosApi(authContext.username).then(response => {
      setTodos(response.data)
    });
  }

  useEffect(() => {
    refreshTodos()
  }, [])

  async function deleteTodo(id: number) {
    try {
      await deleteTodoApi(authContext.username, id)
      refreshTodos()
    } catch (error) {
      console.error("Failed to delete the todo", error)
    }
  }

  function createTodo(values: any) {
    const newTodo: Todo = {
      id: -1,
      description: values.description,
      targetDate: new Date(values.targetDate),
      isDone: false,
      username: authContext.username
    }
    createTodoApi(authContext.username, newTodo).then(() => {
      refreshTodos()
    })

  }

  function updateTodo(id: number) {
    const todoToUpdate = todos.find(todo => todo.id === id)
    if (todoToUpdate) {
      setSelectedTodo(todoToUpdate)
      setShowModal(true)
    }
    refreshTodos()
  }


  return (
    <>
      {showModal && <UpdateTodoModal todo={selectedTodo} handleClose={() => { setShowModal(false); refreshTodos() }} />}
      <div>
        <TodoForm text='Add' context='Add a thing you want to do!' initialValues={{ descriptions: "", targetDate: "" }} onSubmit={createTodo} />
      </div>
      <div className="mx-8 bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center text-violet-700 mb-2 font-semibold">Todo List</h2>
        <table className='table-fixed w-full bg-white rounded-lg border-separate border-spacing-2 border'>
          <thead>
            <tr>
              <th className='border p-2 w-6/12'>Task</th>
              <th className='border p-2 w-2/12'>Target Date</th>
              <th className='border p-2 w-2/12'>Status</th>
              <th className='border p-2 w-2/12'>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td className='border p-2'>{todo.description}</td>
                <td className='border p-2'>{todo.targetDate.toString()}</td>
                <td className='border p-2'>{todo.isDone ? 'Done' : 'Pending'}</td>
                <td className='border p-2 flex gap-2'>
                  <ButtonComponent text='Delete' onClick={() => deleteTodo(todo.id)} hoverExpand={true} />
                  <ButtonComponent text='Update' onClick={() => updateTodo(todo.id)} hoverExpand={true} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}