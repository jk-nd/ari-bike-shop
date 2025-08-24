import { createContext, useContext, useState, ReactNode } from 'react'
import { authApi } from '../services/api'

interface User {
  username: string
  role: string
  accessToken: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    try {
      // Get OIDC token from the embedded server
      const accessToken = await authApi.getToken(username, password)
      
      // Determine user role based on username
      let role: string
      switch (username) {
        case 'alice':
          role = 'operator'
          break
        case 'carol':
          role = 'fleet_manager'
          break
        default:
          role = 'customer'
      }
      
      // Set user with access token
      setUser({
        username,
        role,
        accessToken
      })
      
      return true
    } catch (error) {
      console.error('Login error:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
