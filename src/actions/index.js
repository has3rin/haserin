import { TOGGLE_JAPANESE } from "./types"

export const toggleJapanese = isJapanese => ({
  type: TOGGLE_JAPANESE,
  payload: isJapanese,
})
