import { Song, Albums, FavouriteSong } from "./Albums";

export const LOAD_ALBUM_SUCCESS = 'LOAD_ALBUM_SUCCESS'
export const CHANGE_CURRENT_ALBUM = 'CHANGE_CURRENT_ALBUM'
export const SHOW_PLAYLIST = 'SHOW_PLAYLIST'
export const PLAY_SONG = 'PLAY_SONG'
export const PAUSE_SONG = 'PAUSE_SONG'
export const CHANGE_VOLUME = 'CHANGE_VOLUME'

export const ADD_TO_FAVOURITE_SUCCESS = 'ADD_TO_FAVOURITE_SUCCESS'
export const REMOVE_FROM_FAVOURITE_SUCCESS = 'REMOVE_FROM_FAVOURITE_SUCCESS'

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_ERROR = 'SIGN_OUT_ERROR'

export interface LoadAlbumSuccessAction {
    type: typeof LOAD_ALBUM_SUCCESS
    albums: Albums
}

export interface ChangeCurrentAlbumAction {
    type: typeof CHANGE_CURRENT_ALBUM,
    currentAlbum: string,
    currentAlbumSongs: Song[]
}

export interface ShowPlaylistAction {
    type: typeof SHOW_PLAYLIST
    userPlaylist: Song[],
    currentAlbum: string
}

export interface PlaySongAction {
    type: typeof PLAY_SONG,
    currentSong: string
}

export interface PauseSongAction {
    type: typeof PAUSE_SONG
}

export interface ChangeVolumeAction {
    type: typeof CHANGE_VOLUME,
    volume: number
}

export interface AddToFavouriteSuccessAcction {
    type: typeof ADD_TO_FAVOURITE_SUCCESS,
    userPlaylist: Song[]
}

export interface RemovedFromFavouriteSuccessAcction {
    type: typeof REMOVE_FROM_FAVOURITE_SUCCESS,
    userPlaylist: Song[]
}

export interface SignUpSuccessAction {
    type: typeof SIGN_UP_SUCCESS,
    message: string
}

export interface SignUpErrorAction {
    type: typeof SIGN_UP_ERROR,
    message: string
}

export interface SignInSuccessAction {
    type: typeof SIGN_IN_SUCCESS,
    message: string,
    token: string,
    userId: string,
    userPlaylist: Song[]
}

export interface SignInErrorAction {
    type: typeof SIGN_IN_ERROR,
    message: string
}

export interface SignOutSuccessAction {
    type: typeof SIGN_OUT_SUCCESS,
    message: string
}

export interface SignOutErrorAction {
    type: typeof SIGN_OUT_ERROR,
    message: string
}

export type AlbumsActionTypes = LoadAlbumSuccessAction | ChangeCurrentAlbumAction | ShowPlaylistAction | PlaySongAction | PauseSongAction | ChangeVolumeAction

export type SigningActionTypes = SignUpSuccessAction | SignUpErrorAction | SignInSuccessAction | SignInErrorAction | SignOutSuccessAction | SignOutErrorAction | AddToFavouriteSuccessAcction | RemovedFromFavouriteSuccessAcction

export type AppActions = AlbumsActionTypes | SigningActionTypes