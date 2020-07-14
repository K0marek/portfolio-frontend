import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import axios from 'axios'
import { Song } from "../../types/Albums"

const currentAlbumChanged = (currentAlbumSongs: Song[], albumName: string): AppActions => ({
    type: 'CHANGE_CURRENT_ALBUM',
    currentAlbum: albumName,
    currentAlbumSongs
})

export const changeCurrentAlbum = (albumName: string) => async (dispatch: Dispatch<AppActions>) => {
    const res = await await axios.post('http://localhost:8080/api/albums', { albumName })
    const { data } = res
    dispatch(currentAlbumChanged(data, albumName))
}