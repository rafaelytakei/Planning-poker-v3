/* eslint-disable import/no-duplicates */

declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ReturnType<ComponentOptions>
  export default component
}

declare module 'virtual:generated-layouts' {
  export function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]
}
