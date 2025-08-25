import { environment } from './environment'

// Debug function to log environment configuration
export const logEnvironmentConfig = () => {
  console.log('Environment Configuration:')
  console.log('- Hostname:', window.location.hostname)
  console.log('- API Base URL:', environment.apiBaseUrl)
  console.log('- Auth URL:', environment.authUrl)
  console.log('- Is Production:', environment.isProduction)
  console.log('- Full URL:', window.location.href)
}

// Call this function to debug environment detection
if (typeof window !== 'undefined') {
  logEnvironmentConfig()
}
