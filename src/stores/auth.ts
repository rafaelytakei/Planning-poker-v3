import { promiseTimeout } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import to from 'await-to-js'
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
} from 'firebase/auth'
// import '~/composables/firebase'

const auth = getAuth()

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      loading: false,
      user: undefined as undefined | User,
    }
  },
  getters: {
    /**
     * Checks if the user is logged in
     * @param state - Store state
     * @returns True if user is logged in
     */
    isLoggedIn(state) {
      return state.token !== ''
    },
  },
  actions: {
    /**
     * Logs the user in (just generates a random uuid and sets it as the token after 1s)
     */
    async login() {
      this.loading = true
      await promiseTimeout(1000)
      this.loading = false
      this.token = uuidv4()
    },
    /**
     * Logs the user out (clears the token)
     */
    logout() {
      this.token = ''
    },
    async googleLogin() {
      const provider = new GoogleAuthProvider()
      const [err, res] = await to(signInWithPopup(auth, provider))
      if (err) {
        console.error(err)
        return
      }
      this.user = res?.user
      console.log(this.user)
    },
    async updateUser() {
      this.user = await new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (u) => {
            unsubscribe()
            resolve(u as any)
          },
          reject
        )
      })
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
