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

export interface Albums {
    albumsNames: string[],
    currentAlbum: string,
    currentAlbumSongs: Song[]
}