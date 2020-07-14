import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import axios from "axios"
import { FavouriteSong, Song } from "../../types/Albums"

const addedToFavourite = (userPlaylist: Song[]): AppActions => ({
    type: 'ADD_TO_FAVOURITE_SUCCESS',
    userPlaylist
})

export const addToFavourite = (favouriteSong: FavouriteSong) => async (dispatch: Dispatch<AppActions>) => {
    const res = await axios.post('http://localhost:8080/api/albums/favourite', { favouriteSong, action: 'ADD' })
    const { userPlaylist } = res.data
    dispatch(addedToFavourite(userPlaylist))
}