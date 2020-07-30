import axios from 'axios'
import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import { Song } from '../../types/Player'

const signInSuccess = (message: string, token: string, userId: string, userPlaylist: Song[]): AppActions => ({
    type: 'SIGN_IN_SUCCESS',
    message,
    token,
    userId,
    userPlaylist
})

const signInError = (message: string): AppActions => ({
    type: 'SIGN_IN_ERROR',
    message
})

export const signIn = (login: any) => async (dispatch: Dispatch<AppActions>) => {
    const res = await axios.post('http://localhost:8080/api/account/signin', { login })
    const { success, message, token, userId, userPlaylist } = res.data
    if (success)
        dispatch(signInSuccess(message, token, userId, userPlaylist))
    else
        dispatch(signInError(message))
}   