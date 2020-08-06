import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { AppState } from '../../store';
import SongLabel from './SongLabel';
import { Song } from '../../types/Player';

const Description = () => {

    const { currentAlbumSongs, currentSelectedAlbum } = useSelector((state: AppState) => state.albumReducer)
    const { userPlaylist } = useSelector((state: AppState) => state.signReducer)

    const [favourite, setFavourite] = useState<Song[]>([])

    useEffect(() => {
        const favourite = userPlaylist.filter(item => item.album === currentSelectedAlbum)
        setFavourite(favourite)
    }, [userPlaylist, currentSelectedAlbum])


    return (
        <div id="description">
            <div className="top">
                <div className="id">#</div>
                <div className="title">Title</div>
                <div className="album">Album</div>
                <div className="time"><i className="material-icons">timer</i></div>
                <div className="favourite"><i className="material-icons">playlist_add</i></div>
                <div className="play"><i className="material-icons">play_circle_filled</i></div>
            </div>
            {currentAlbumSongs.map((song: Song, index: number) => {
                const { album, name, size, duration } = song
                let isFavourite = favourite.some(item => item.album === album && item.name === name)
                if (currentSelectedAlbum === 'playlist') isFavourite = true
                return <SongLabel album={album} name={name} size={size} duration={duration} id={index} favourite={isFavourite} key={index} />
            })}
        </div>
    );
};

export default Description;