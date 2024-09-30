import axios from "axios";

export const retreiveTodos = (username: string) => {
    return axios.get("http://localhost:8080/" + username + "/todos")
}