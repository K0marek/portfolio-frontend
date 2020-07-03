import { Albums } from "./Albums";

export const LOAD_ALBUM_SUCCESS = 'LOAD_ALBUM_SUCCESS'

export interface LoadAlbumSuccessAction {
    type: typeof LOAD_ALBUM_SUCCESS
    albums: Albums
}

export type AlbumsActionTypes = LoadAlbumSuccessAction

export type AppActions = AlbumsActionTypes