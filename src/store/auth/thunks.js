import { checkingCredentials } from "./authSlice"

export const checkingLoggedUser = () => async (dispatch) => { 
    return async (dispatch) => { 
        dispatch(checkingCredentials())
          
    }
}

