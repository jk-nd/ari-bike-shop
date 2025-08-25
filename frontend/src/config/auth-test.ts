import { environment } from './environment'

// Test function to check authentication configuration
export const testAuthConfiguration = async () => {
  console.log('=== Authentication Configuration Test ===')
  console.log('Environment:', environment)
  
  // Test 1: Check if the auth URL is accessible
  try {
    console.log('Testing auth URL accessibility...')
    const response = await fetch(environment.authUrl, {
      method: 'OPTIONS'
    })
    console.log('Auth URL accessible:', response.ok)
  } catch (error) {
    console.error('Auth URL not accessible:', error)
  }
  
  // Test 2: Try to get OIDC configuration
  try {
    const oidcConfigUrl = environment.authUrl.replace('/token', '/.well-known/openid_configuration')
    console.log('Testing OIDC configuration at:', oidcConfigUrl)
    const response = await fetch(oidcConfigUrl)
    if (response.ok) {
      const config = await response.json()
      console.log('OIDC Configuration:', config)
    } else {
      console.log('OIDC configuration not available')
    }
  } catch (error) {
    console.error('Error fetching OIDC configuration:', error)
  }
  
  // Test 3: Try authentication with correct client_id
  console.log('Testing authentication with client_id: test3delete...')
  try {
    const params = new URLSearchParams({
      grant_type: 'password',
      username: 'alice',
      password: 'password123',
      client_id: 'test3delete'
    })
    
    const response = await fetch(environment.authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params
    })
    
    console.log(`Auth test with client_id: ${response.status} ${response.statusText}`)
    
    if (response.ok) {
      const data = await response.json()
      console.log('Authentication successful!')
      console.log('Token received:', !!data.access_token)
    } else {
      const errorText = await response.text()
      console.log('Authentication error:', errorText.substring(0, 200))
    }
  } catch (error) {
    console.error('Error testing authentication:', error)
  }
  
  console.log('=== End Authentication Test ===')
}

// Call the test function
if (typeof window !== 'undefined' && environment.isProduction) {
  // Only run in production to avoid interfering with local development
  setTimeout(() => {
    testAuthConfiguration()
  }, 2000) // Delay to let the app load first
}
