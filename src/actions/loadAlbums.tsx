import { Albums } from "../types/Albums"
import { AppActions } from "../types/actions"
import { Dispatch } from "redux"

const albumLoaded = (albums: Albums): AppActions => ({
    type: 'LOAD_ALBUM_SUCCESS',
    albums
})

export const loadAlbums = () => async (dispatch: Dispatch<AppActions>) => {
    const res = await fetch('https://portfolio-kleszcz.herokuapp.com/api/albums')
    const json = await res.json()
    const object: Albums = {
        albumsNames: json.dirs,
        currentAlbumSongs: json.files
    }
    await dispatch(albumLoaded(object))
}