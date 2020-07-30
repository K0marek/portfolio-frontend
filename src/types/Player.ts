export interface Song {
    album: string,
    name: string,
    size: string,
    duration: number
}

export interface FavouriteSong {
    song: Song,
    userId: string
}

export interface Player {
    albumsNames: string[],
    currentSelectedAlbum: string,
    currentAlbumSongs: Song[],
    currentPlaySong: string,
    currentSongAlbum: string,
    currentPlaySongAlbumSongs: Song[],
    isPlaying: boolean,
    volume: number
}