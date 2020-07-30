import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import { Song } from "../../types/Player"

const albumLoaded = (albumNames: string[], currentSelectedAlbum: string, currentAlbumSongs: Song[]): AppActions => ({
    type: 'LOAD_ALBUM_SUCCESS',
    albumNames,
    currentSelectedAlbum,
    currentAlbumSongs
})

export const loadAlbums = () => async (dispatch: Dispatch<AppActions>) => {
    const res = await fetch('http://localhost:8080/api/albums')
    const json = await res.json()
    const albumNames: string[] = json.dirs
    const currentSelectedAlbum: string = json.dirs[0]
    const currentAlbumSongs: Song[] = json.files
    await dispatch(albumLoaded(albumNames, currentSelectedAlbum, currentAlbumSongs))
}