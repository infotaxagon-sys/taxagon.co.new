// TODO: integrate Firebase Auth — replace mock with real auth provider

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

const MOCK_USER: User = {
  id: 'mock-user-001',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: undefined,
}

// Set to true to simulate being logged in (for dashboard preview)
const MOCK_LOGGED_IN = true

export function useAuth() {
  return {
    user: MOCK_LOGGED_IN ? MOCK_USER : null,
    isLoading: false,
    signIn: async (_email: string, _password: string) => {
      // TODO: integrate Firebase Auth signInWithEmailAndPassword
      console.log('Sign in stub called')
    },
    signInWithGoogle: async () => {
      // TODO: integrate Google OAuth
      console.log('Google sign in stub called')
    },
    signOut: async () => {
      // TODO: integrate Firebase Auth signOut
      console.log('Sign out stub called')
    },
  }
}
