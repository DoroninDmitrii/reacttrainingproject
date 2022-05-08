export const mainReducer = (state, action) => {

  switch (action.type) {
    case "LOGIN":
      return {
        ...state, isAuth: action.payload
      }
    case "LOGOUT":
      return {
        ...state, isAuth: action.payload
      }
    case "LOCALSTORAGE":
      return {
        ...state, isAuth: action.payload
      }



      default: 
      return state
  }
}
