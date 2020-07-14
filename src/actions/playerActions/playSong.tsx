import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import axios from "axios"
import { FavouriteSong, Song } from "../../types/Albums"

const songPlayed = (userPlaylist: Song[]): AppActions => ({
    type: 'REMOVE_FROM_FAVOURITE_SUCCESS',
    userPlaylist
})

export const playSong = (album: string, name: string, id: number) => async (dispatch: Dispatch<AppActions>) => {
    const res = await axios.get('http://localhost:8080/api/albums', { params: { album, name, id } })
    //dispatch(songPlayed())
}