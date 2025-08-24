import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Login'
import { useAuth } from '../contexts/AuthContext'

const LoginPage = () => {
  const { login, isLoading } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleLogin = async (username: string, password: string) => {
    setError('')
    
    try {
      const success = await login(username, password)
      if (success) {
        navigate('/')
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError('An error occurred during login')
    }
  }

  return (
    <div>
      <Login onLogin={handleLogin} isLoading={isLoading} />
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
    </div>
  )
}

export default LoginPage
