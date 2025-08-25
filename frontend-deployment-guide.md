# Deploying React Frontend to Noumena Cloud

## Overview

When deploying a React frontend from local development to Noumena Cloud, you need to configure the authentication to use Noumena Cloud's Keycloak instance instead of the local development server. This guide shows you how to make the necessary changes to your frontend code.

## Prerequisites

This guide assumes you have:
- A React application (React 16+)
- A build tool (Vite, Create React App, or similar)
- An existing Noumena Cloud application with Keycloak configured
- The NPL CLI installed and configured

## Setup Requirements

This approach works with:
- **React 16+** (functional components and hooks)
- **Any build tool**: Vite, Create React App, Webpack, etc.
- **TypeScript or JavaScript**
- **Any state management**: Redux, Zustand, Context API, etc.

The key requirement is that your frontend can make HTTP requests to external APIs and can access `window.location.hostname`.

## Files That Need to Be Modified

### 1. Environment Configuration (`src/config/environment.ts`)

This is the most important file. It automatically detects whether the app is running in development or production and uses the appropriate URLs.

```typescript
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
    // Format: {tenant}-{app}.noumena.cloud
    const parts = hostname.split('.')
    const tenantApp = parts[0] // e.g., "nc1-myapp"
    
    return {
      apiBaseUrl: `https://${tenantApp}.noumena.cloud`,
      authUrl: `https://keycloak-${tenantApp}.noumena.cloud/realms/{realm-name}/protocol/openid-connect/token`,
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
```

**Important**: Replace `{realm-name}` with your actual Keycloak realm name.

### 2. API Service (`src/services/api.ts`)

Update the authentication API to use the environment configuration and handle both public and confidential clients:

```typescript
import { environment } from '../config/environment'

// Authentication API
export const authApi = {
  // Get OIDC token
  getToken: async (username: string, password: string) => {
    // Try without client_id first for public clients
    const params = new URLSearchParams({
      grant_type: 'password',
      username: username,
      password: password
    })

    console.log('Attempting authentication with URL:', environment.authUrl)
    console.log('Request parameters:', Object.fromEntries(params))

    const response = await fetch(environment.authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params
    })

    console.log('Authentication response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Authentication error response:', errorText)
      
      // If it fails without client_id, try with client_id
      if (errorText.includes('invalid_client')) {
        console.log('Trying with client_id...')
        params.append('client_id', '{your-client-id}') // Replace with your actual client ID
        
        const response2 = await fetch(environment.authUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params
        })
        
        console.log('Authentication response status (with client_id):', response2.status)
        
        if (!response2.ok) {
          const errorText2 = await response2.text()
          console.error('Authentication error response (with client_id):', errorText2)
          throw new Error(`Authentication failed: ${response2.status} ${response2.statusText}`)
        }
        
        const data2 = await response2.json()
        console.log('Authentication successful with client_id, token received')
        return data2.access_token
      }
      
      throw new Error(`Authentication failed: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Authentication successful without client_id, token received')
    return data.access_token
  }
}
```

**Important**: Replace `{your-client-id}` with your actual Keycloak client ID.

### 3. Generated Client Base Configuration (`src/generated-client/base.ts`)

If you're using generated API clients (e.g., from OpenAPI), update the base configuration:

```typescript
// Dynamic base path based on environment
const getBasePath = () => {
  if (typeof window !== 'undefined' && window.location.hostname.includes('noumena.cloud')) {
    const parts = window.location.hostname.split('.')
    const tenantApp = parts[0]
    return `https://${tenantApp}.noumena.cloud`
  }
  return "http://localhost:12000"
}

export const BASE_PATH = getBasePath().replace(/\/+$/, "");
```

## Keycloak Configuration Requirements

Before deploying, ensure your Noumena Cloud Keycloak instance is properly configured:

### 1. Realm Setup
- Create or identify your realm name
- Update the `authUrl` in `environment.ts` to use your realm name

### 2. Client Configuration
- Create a client with the same name as your realm (or your preferred client name)
- Set Access Type to "public"
- Enable "Direct Access Grants"
- Add your frontend URL to "Valid redirect URIs" (e.g., `https://{tenant}-{app}.noumena.cloud/*`)

### 3. User Setup

> **⚠️ DEVELOPMENT ONLY**  
> The following user setup instructions are for development purposes only. For production deployments, proper user management policies, password policies, and security measures must be implemented according to your organization's security requirements.

- Create users in the Keycloak admin console
- Set passwords (minimum 14 characters required by Noumena Cloud Keycloak) and ensure "Temporary" is OFF
- Set "Email Verified" to ON
- Remove any "Required Actions"

## Deployment Steps

### 1. Build the Frontend

```bash
# For Vite
npm run build

# For Create React App
npm run build

# For other build tools
# Use your project's build command
```

### 2. Deploy to Noumena Cloud

```bash
npl cloud deploy frontend --app YOUR_APP_NAME --tenant YOUR_TENANT --frontend frontend/dist
```

Replace:
- `YOUR_APP_NAME` with your Noumena Cloud application name
- `YOUR_TENANT` with your tenant name
- `frontend/dist` with the path to your built frontend files

## Troubleshooting

### Common Issues and Solutions

#### 1. "Invalid client or Invalid client credentials"
- **Cause**: Client ID mismatch or client not properly configured
- **Solution**: Verify the client ID in your code matches your Keycloak client name

#### 2. "Account is not fully set up"
- **Cause**: User has required actions or email not verified
- **Solution**: 
  - Set "Email Verified" to ON in user details
  - Remove any "Required Actions" from the user
  - Ensure "Temporary" is OFF in credentials

#### 3. 404 errors on authentication URL
- **Cause**: Incorrect realm name in the authentication URL
- **Solution**: Verify the realm name in `environment.ts` matches your Keycloak realm

#### 4. CORS errors on OIDC discovery
- **Cause**: OIDC discovery endpoint not accessible from frontend
- **Solution**: These errors are expected and don't affect authentication. The fallback mechanism handles this.

### Debugging

Enable console logging to debug authentication issues:

```typescript
// Add this to your main application file
if (typeof window !== 'undefined' && environment.isProduction) {
  console.log('Environment Configuration:', environment)
}
```

## Template Files

You can use these files as templates for any React frontend that needs to work with Noumena Cloud. The key benefits are:

- **Automatic environment detection**: No manual configuration needed
- **Fallback authentication**: Handles both public and confidential clients
- **Generic implementation**: Works with any React setup
- **Build tool agnostic**: Works with Vite, Create React App, Webpack, etc.

## Example Integration

Here's how to integrate the environment configuration into your existing authentication context:

```typescript
// In your AuthContext or authentication service
import { environment } from '../config/environment'
import { authApi } from '../services/api'

const login = async (username: string, password: string) => {
  try {
    const token = await authApi.getToken(username, password)
    // Handle successful login
    return token
  } catch (error) {
    // Handle login error
    throw error
  }
}
```

This approach is completely independent of the specific frontend application - it only handles the authentication and API URL configuration.
