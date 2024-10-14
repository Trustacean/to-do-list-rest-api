import { Todo } from "../models/Todo";
import { apiClient } from "./ApiClient";


export const retreiveTodosApi = (username: string) => {
    return apiClient.get(`/users/${username}/todos`)
}

export const deleteTodoApi = (username: string, id: number) => {
    return apiClient.delete(`/users/${username}/todos/${id}`)
}

export const updateTodoApi = (username: string, id: number, todo: Todo) => {
    return apiClient.put(`/users/${username}/todos/${id}`, todo)
}

export const createTodoApi = (username: string, todo: Todo) => {
    return apiClient.post(`/users/${username}/todos`, todo)
}

export const executeBasicAuthenticationService = (token: string) => {
    return apiClient.get('/basicauth', {
        headers: {
            authorization: token
        }
    })
}