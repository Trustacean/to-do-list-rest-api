import ButtonComponent from './ButtonComponent';

type TodoTableComponentProps = {
  todos: { id: number, task: string, targetDate: Date, completed: boolean }[]
}

export default function TodoTableComponent(
  { todos }: TodoTableComponentProps
) {
  return (
    <table className='table-fixed w-full bg-white rounded-lg border-separate border-spacing-2 border'>
      <thead>
        <tr>
          <th className='border p-2 w-2/5'>Task</th>
          <th className='border p-2'>Target Date</th>
          <th className='border p-2 w-1/6'>Status</th>
          <th className='border p-2 w-1/12'>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td className='border p-2'>{todo.task}</td>
            <td className='border p-2'>{todo.targetDate.toDateString()}</td>
            <td className='border p-2'>{todo.completed ? 'Completed' : 'Pending'}</td>
            <td className='border p-2'>
              <div className='w-full h-full flex'>
                <ButtonComponent text='Delete' onClick={() => { }} hoverExpand={true} maxWidth='max-w-20' />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}