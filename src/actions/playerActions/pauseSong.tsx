import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"

const songPaused = (): AppActions => ({
    type: 'PAUSE_SONG',
})

export const pauseSong = () => async (dispatch: Dispatch<AppActions>) => {
    dispatch(songPaused())
}