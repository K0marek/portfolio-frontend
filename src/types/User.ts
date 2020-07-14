import { Song } from './Albums';

export interface User {
    success: boolean,
    message: string,
    token: string,
    userId: string,
    userPlaylist: Song[]
}