import { AppActions } from "../../types/actions"
import { Dispatch } from "redux"
import { Song } from "../../types/Player"

const songPlayed = (currentSong: string, currentSongAlbum: string, currentPlaySongAlbumSongs: Song[]): AppActions => ({
    type: 'PLAY_SONG',
    currentSong,
    currentSongAlbum,
    currentPlaySongAlbumSongs
})

export const playSong = (name: string, id: number, currentSongAlbum: string, currentPlaySongAlbumSongs: Song[]) => async (dispatch: Dispatch<AppActions>) => {
    const nr = id < 9 ? '0' + (id + 1).toString() : id + 1
    const currentSong = `${nr} ${name}`
    dispatch(songPlayed(currentSong, currentSongAlbum, currentPlaySongAlbumSongs))
}