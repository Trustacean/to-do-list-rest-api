import { createContext, useContext, useState } from "react";

const AuthContext = createContext<{ isAuthenticated: boolean; login: (username: string, password: string) => boolean; logout: () => void, username: string } | undefined>(undefined);

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

    function handleLogin(username: string, password: string) {
        if (username === "Trustacean" && password === "admin") {
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function handleLogout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout, username }}>
            {children}
        </AuthContext.Provider>
    )
}