import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth'
import to from 'await-to-js'
import './'

const auth = getAuth()
export const currentUser = ref()

/**
 * Handles Google Login
 * @returns True if login was successful, false otherwise
 */
export const googleLogin = async () => {
  const provider = new GoogleAuthProvider()
  const [err, res] = await to(signInWithPopup(auth, provider))
  if (err) {
    console.error(err)
    return false
  }
  currentUser.value = res?.user
  return true
}

/**
 * Updates the current user
 */
export const updateCurrentUser = async () => {
  currentUser.value = await new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (u) => {
        unsubscribe()
        resolve(u)
      },
      reject
    )
  })
}
