export const KEYS = {}

export type valueof<T> = T[keyof T]
export type KeyType = valueof<typeof KEYS>
