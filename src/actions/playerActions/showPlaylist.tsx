import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import { Song } from "../../types/Player"

const showPlaylistAction = (userPlaylist: Song[]): AppActions => ({
    type: 'SHOW_PLAYLIST',
    userPlaylist,
    currentSelectedAlbum: 'playlist'
})

export const showPlaylist = (userPlaylist: Song[]) => (dispatch: Dispatch<AppActions>) => {
    dispatch(showPlaylistAction(userPlaylist))
}