// Environment configuration
interface EnvironmentConfig {
  apiBaseUrl: string
  authUrl: string
  isProduction: boolean
}

// Get the current environment
const getEnvironment = (): EnvironmentConfig => {
  const hostname = window.location.hostname
  
  // Check if we're running in production (Noumena Cloud)
  if (hostname.includes('noumena.cloud')) {
    // Extract tenant and app from the hostname
    // Format: nc1-test3delete.noumena.cloud
    const parts = hostname.split('.')
    const tenantApp = parts[0] // nc1-test3delete
    
    // Try different realm names - the realm might not be 'noumena'
    const possibleRealms = ['noumena', 'test3delete', 'nc1-test3delete', 'master']
    
    return {
      apiBaseUrl: `https://${tenantApp}.noumena.cloud`,
      authUrl: `https://keycloak-${tenantApp}.noumena.cloud/realms/test3delete/protocol/openid-connect/token`,
      isProduction: true
    }
  }
  
  // Development environment
  return {
    apiBaseUrl: 'http://localhost:12000',
    authUrl: 'http://localhost:11000/token',
    isProduction: false
  }
}

export const environment = getEnvironment()