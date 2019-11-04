import { TOGGLE_JAPANESE } from "../actions/types"

const INITIAL_STATE = { isJapanese: false }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_JAPANESE:
      return { ...state, isJapanese: action.payload }
    default:
      return state
  }
}
