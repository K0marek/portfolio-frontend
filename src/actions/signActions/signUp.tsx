import axios from 'axios'
import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"

const signedUpSuccess = (message: string): AppActions => ({
    type: 'SIGN_UP_SUCCESS',
    message
})

const signedUpError = (message: string): AppActions => ({
    type: 'SIGN_UP_ERROR',
    message
})

export const signUp = (username: string, email: string, password: string) => async (dispatch: Dispatch<AppActions>) => {
    const user = {
        username,
        email,
        password
    }
    const res = await axios.post('http://localhost:8080/api/account/signup', { user })
    const { success, message } = res.data
    if (success)
        dispatch(signedUpSuccess(message))
    else
        dispatch(signedUpError(message))
}