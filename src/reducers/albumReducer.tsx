import { Albums } from "../types/Albums"
import { AlbumsActionTypes } from "../types/actions"

const initState: Albums = {
    albumsNames: [],
    currentAlbumSongs: []
}

const albumReducer = (state = initState, action: AlbumsActionTypes): Albums => {
    switch (action.type) {
        case 'LOAD_ALBUM_SUCCESS':
            const { albumsNames, currentAlbumSongs } = action.albums
            return {
                ...state,
                albumsNames,
                currentAlbumSongs
            }
        default:
            return { ...state }
    }
}

export default albumReducer