import { Albums } from "../types/Albums"
import { AlbumsActionTypes } from "../types/actions"

const initState: Albums = {
    albumsNames: [],
    currentAlbum: '',
    currentAlbumSongs: []
}

const albumReducer = (state = initState, action: AlbumsActionTypes): Albums => {
    switch (action.type) {
        case 'LOAD_ALBUM_SUCCESS':
            return {
                ...action.albums
            }
        case 'CHANGE_CURRENT_ALBUM':
            return {
                ...state,
                currentAlbum: action.currentAlbum,
                currentAlbumSongs: action.currentAlbumSongs
            }
        case 'SHOW_PLAYLIST':
            return {
                ...state,
                currentAlbumSongs: action.userPlaylist,
                currentAlbum: action.currentAlbum
            }
        case 'PLAY_SONG':
            return {
                ...state
            }
        default:
            return { ...state }
    }
}

export default albumReducer