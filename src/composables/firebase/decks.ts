import to from 'await-to-js'
import { ref as dbRef, push, set } from 'firebase/database'
import { db } from '.'
import { currentUser } from './auth'

export const addCustomDeck = async (deck: { label: string; value: string }) => {
  const userDecksRef = dbRef(db, `users/${currentUser.value.uid}/customDecks`)
  const newDeckRef = push(userDecksRef)
  const [err] = await to(set(newDeckRef, deck))
  if (err) {
    console.error(err)
    return false
  }
  return true
}
