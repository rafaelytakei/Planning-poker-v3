import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import {
  anonymousLogin,
  currentUser,
  updateCurrentUser,
} from './composables/firebase/auth'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach(async (to, from) => {
  // If user is null, tries to update the user
  if (!currentUser.value) {
    await updateCurrentUser()
  }
  // If the user is not logged in, he'll be logged in anonymously automatically
  if (
    to.path !== '/profile' &&
    (!currentUser.value || !currentUser.value.displayName)
  ) {
    await anonymousLogin()
    await updateCurrentUser()
    return {
      path: '/profile',
      query: {
        from: to.fullPath,
        new: 'true',
      },
    }
  }
  return true
})

export default router
