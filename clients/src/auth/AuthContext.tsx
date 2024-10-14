import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/TodoApiService";
import { apiClient } from "../api/ApiClient";

const AuthContext = createContext<{ isAuthenticated: boolean; login: (username: string, password: string) => Promise<boolean>; logout: () => void, username: string, token: string } | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState('')
    const [token, setToken] = useState('')

    async function handleLogin(username: string, password: string) {

        const basicToken = `Basic ${window.btoa(username + ":" + password)}`
        try {
            const response = await executeBasicAuthenticationService(basicToken)
            if (response.status !== 200) {
                handleLogout()
                return false
            }
            setAuthenticated(true)
            setUsername(username)
            setToken(basicToken)
            apiClient.defaults.headers.common['Authorization'] = basicToken
            return true
        } catch (error) {
            handleLogout()
            return false
        }
    }

    function handleLogout() {
        setAuthenticated(false)
        apiClient.defaults.headers.common['Authorization'] = ''
        setUsername('')
        setToken('')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout, username, token }}>
            {children}
        </AuthContext.Provider>
    )
}