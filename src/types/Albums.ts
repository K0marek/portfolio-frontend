interface CurrentAlbumSongs {
    dir: string,
    file: string,
    size: string
}

export interface Albums {
    albumsNames: string[],
    currentAlbumSongs: CurrentAlbumSongs[]
}