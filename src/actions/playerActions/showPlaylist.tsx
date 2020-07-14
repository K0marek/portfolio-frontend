import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import { Song, FavouriteSong } from "../../types/Albums"

const showPlaylistAction = (userPlaylist: Song[]): AppActions => ({
    type: 'SHOW_PLAYLIST',
    userPlaylist,
    currentAlbum: 'playlist'
})

export const showPlaylist = (userPlaylist: Song[]) => (dispatch: Dispatch<AppActions>) => {
    dispatch(showPlaylistAction(userPlaylist))
}