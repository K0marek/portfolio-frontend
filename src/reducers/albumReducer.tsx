import { Player } from "../types/Player"
import { AlbumsActionTypes } from "../types/actions"

const initState: Player = {
    albumsNames: [],
    currentSelectedAlbum: '',
    currentAlbumSongs: [],
    currentPlaySong: '',
    currentSongAlbum: '',
    currentPlaySongAlbumSongs: [],
    isPlaying: false,
    volume: 40,
}

const albumReducer = (state = initState, action: AlbumsActionTypes): Player => {
    switch (action.type) {
        case 'LOAD_ALBUM_SUCCESS':
            return {
                ...state,
                albumsNames: action.albumNames,
                currentSelectedAlbum: action.currentSelectedAlbum,
                currentAlbumSongs: action.currentAlbumSongs
            }
        case 'CHANGE_CURRENT_ALBUM':
            return {
                ...state,
                currentSelectedAlbum: action.currentSelectedAlbum,
                currentAlbumSongs: action.currentAlbumSongs
            }
        case 'SHOW_PLAYLIST':
            return {
                ...state,
                currentAlbumSongs: action.userPlaylist,
                currentSelectedAlbum: action.currentSelectedAlbum
            }
        case 'PLAY_SONG':
            return {
                ...state,
                currentPlaySong: action.currentSong,
                currentSongAlbum: action.currentSongAlbum,
                currentPlaySongAlbumSongs: action.currentPlaySongAlbumSongs,
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
        case 'PREVIOUS_SONG':
            const previous = state.currentPlaySongAlbumSongs[action.id].name.slice(0, -4)
            return {
                ...state,
                currentPlaySong: previous
            }
        case 'NEXT_SONG':
            const next = state.currentPlaySongAlbumSongs[action.id].name.slice(0, -4)
            return {
                ...state,
                currentPlaySong: next
            }
        default:
            return { ...state }
    }
}

export default albumReducer