import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
} from 'firebase/auth'
import to from 'await-to-js'
import './'

import { ref as dbRef, getDatabase, set, get } from 'firebase/database'
const db = getDatabase()

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
 * Handles anonymous login
 * @returns True if login was successful, false otherwise
 */
export const anonymousLogin = async () => {
  const [err] = await to(signInAnonymously(auth))
  if (err) {
    console.error(err)
    return false
  }
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
  if (!currentUser.value) return
  // Get info from the db and merge with whatever comes from auth
  const userRef = dbRef(db, `users/${currentUser.value.uid}`)
  const [err, snapshot] = await to(get(userRef))
  if (err) {
    console.error(err)
    return
  }
  if (snapshot?.exists()) {
    currentUser.value = { ...currentUser.value, ...snapshot.val() }
  }
}

export const setUserDisplayName = async (newName: string) => {
  const userDisplayNameRef = dbRef(
    db,
    `users/${currentUser.value.uid}/displayName`
  )
  const [err] = await to(set(userDisplayNameRef, newName))
  if (err) {
    console.error(err)
    return
  }
}

export const getCustomDecks = async () => {
  const userDecksRef = dbRef(db, `users/${currentUser.value.uid}/customDecks`)
  const [err, snapshot] = await to(get(userDecksRef))
  if (err) {
    console.error(err)
    return []
  }
  if (!snapshot?.exists()) return []
  return Object.values(snapshot.val())
}
