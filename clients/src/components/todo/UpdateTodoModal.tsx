import { Todo } from "../../models/Todo";
import { updateTodoApi } from "../../api/TodoApiService";

import Backdrop from "./Backdrop";
import TodoForm from "./TodoForm";



type UpdateTodoModalProps = {
  handleClose: () => void
  todo: Todo | null
}


export default function UpdateTodoModal({ todo, handleClose }: UpdateTodoModalProps) {

  async function onSubmit(values: any) {
    const updatedTodo: Todo = {
      ...todo!,
      description: values.description,
      targetDate: new Date(values.targetDate),
      isDone: false
    }
    try {
      await updateTodoApi(updatedTodo.username, updatedTodo.id, updatedTodo);
      handleClose();
    } catch (error) {
      console.error("Failed to update the todo", error);
    }
  }

  return (
    <Backdrop>
      <TodoForm initialValues={{ description: todo?.description, targetDate: todo?.targetDate.toString() }} onSubmit={onSubmit} text="Update" context="What do you want to change?" />
    </Backdrop>
  )
}