import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/todo/security/AuthContext'
import TitleComponent from '../components/todo/TitleComponent'
import ButtonComponent from '../components/todo/ButtonComponent'
import TodoTableComponent from '../components/todo/TodoTableComponent'
import { retreiveTodos } from '../services/API/todo/TodoApiService'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [todos, setTodos] = useState([])

  const navigate = useNavigate()
  const authContext = useAuth()

  useEffect(() => {
    retreiveTodos(authContext.username).then(response => {
      console.log(response.data);
      setTodos(response.data.map((todo: { id: number; task: string; targetDate: string; is: boolean }) => {
        return {
          id: todo.id, task: todo.task, targetDate: new Date(todo.targetDate), isDone: todo.is
        };
      }));
    });
  }, [authContext.username]);

  return (
    < div className='container mx-auto shadow-2xl md:py-6 bg-slate-100' >
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
      <div>
        <form action="" className='flex flex-col space-y-4 m-8'>
          <div className='flex'>
            <label htmlFor="todo">Add a New Thing To do!</label>
          </div>
          <div className='flex'>
            <input type="text" id="todo" className='border p-1 flex-grow' />
            <ButtonComponent text='Add' onClick={() => { console.log("a") }} hoverExpand={true} />
          </div>
        </form>
      </div>
      <div className="mx-8 bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center text-violet-700 mb-2 font-semibold">Todo List</h2>
        <TodoTableComponent todos={todos} />
      </div>
    </div >
  )
}

