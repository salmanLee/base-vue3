import type { PersistedStateOptions } from 'pinia-plugin-persistedstate'

type DP = boolean | PersistedStateOptions | PersistedStateOptions[]

export const persist: DP = {
  storage: sessionStorage,
  key: (id) => `store_${id}`
}
