import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"

const songPlayed = (currentSong: string): AppActions => ({
    type: 'PLAY_SONG',
    currentSong
})

export const playSong = (name: string, id: number) => async (dispatch: Dispatch<AppActions>) => {
    const nr = id < 9 ? '0' + (id + 1).toString() : id + 1
    const currentSong = `${nr} ${name}`
    dispatch(songPlayed(currentSong))
}