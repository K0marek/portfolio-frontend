import axios from 'axios'
import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"

const signOutSuccess = (message: string): AppActions => ({
    type: 'SIGN_OUT_SUCCESS',
    message
})

const signOutError = (message: string): AppActions => ({
    type: 'SIGN_OUT_ERROR',
    message
})

export const signOut = (token: string) => async (dispatch: Dispatch<AppActions>) => {
    const res = await axios.post('http://localhost:8080/api/account/signout', { token })
    const { success, message } = res.data
    if (success)
        dispatch(signOutSuccess(message))
    else
        dispatch(signOutError(message))
}   