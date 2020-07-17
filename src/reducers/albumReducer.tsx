import { Albums } from "../types/Albums"
import { AlbumsActionTypes } from "../types/actions"

const initState: Albums = {
    albumsNames: [],
    currentAlbum: '',
    currentAlbumSongs: [],
    currentPlaySong: '',
    isPlaying: false,
    volume: 40
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
                ...state,
                currentPlaySong: action.currentSong,
                isPlaying: true
            }
        case 'PAUSE_SONG':
            return {
                ...state,
                isPlaying: false
            }
        case 'CHANGE_VOLUME':
            return {
                ...state,
                volume: action.volume
            }
        default:
            return { ...state }
    }
}

export default albumReducer