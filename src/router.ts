import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { currentUser, updateCurrentUser } from './composables/firebase/auth'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach(async (to, from) => {
  // If user is null, tries to update the user
  if (!currentUser.value) {
    await updateCurrentUser()
  }
  // If user is still null, he's not logged in. If so, he can only access the index
  if (!currentUser.value && to.path !== '/') {
    return {
      path: `/`,
      query: {
        from: to.fullPath,
      },
    }
  } else if (currentUser.value && to.path === '/' && from.path === '/') {
    // If the user is already logged in, and not coming from another page from the app
    return {
      path: '/home',
    }
  }
  return true
})

export default router
