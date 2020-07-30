import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import axios from "axios"
import { FavouriteSong, Song } from "../../types/Player"

const removedFromFavourite = (userPlaylist: Song[]): AppActions => ({
    type: 'REMOVE_FROM_FAVOURITE_SUCCESS',
    userPlaylist
})

export const removeFromFavourite = (favouriteSong: FavouriteSong) => async (dispatch: Dispatch<AppActions>) => {
    const res = await axios.post('http://localhost:8080/api/albums/favourite', { favouriteSong, action: 'REMOVE' })
    const { userPlaylist } = res.data
    dispatch(removedFromFavourite(userPlaylist))
}