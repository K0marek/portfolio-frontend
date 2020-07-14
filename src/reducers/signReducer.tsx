import { SigningActionTypes } from "../types/actions"
import { User } from "../types/User"

const initState: User = {
    success: false,
    message: '',
    token: '',
    userId: '',
    userPlaylist: []
}

const signReducer = (state = initState, action: SigningActionTypes): User => {
    switch (action.type) {
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                success: true,
                message: action.message
            }
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                message: action.message
            }
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                success: true,
                message: action.message,
                token: action.token,
                userId: action.userId,
                userPlaylist: action.userPlaylist
            }
        case 'SIGN_IN_ERROR':
            return {
                ...state,
                message: action.message
            }
        case 'SIGN_OUT_SUCCESS':
            return {
                ...state,
                success: true,
                message: action.message,
                token: ''
            }
        case 'SIGN_OUT_ERROR':
            return {
                ...state,
                message: action.message
            }
        case 'ADD_TO_FAVOURITE_SUCCESS':
            return {
                ...state,
                userPlaylist: action.userPlaylist
            }
        case 'REMOVE_FROM_FAVOURITE_SUCCESS':
            return {
                ...state,
                userPlaylist: action.userPlaylist
            }
        default:
            return { ...state }
    }
}

export default signReducer