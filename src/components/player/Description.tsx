import React from 'react';
import { useSelector } from 'react-redux'
import { AppState } from '../../store';
import SongLabel from './SongLabel';

const Description = () => {

    const { currentAlbumSongs } = useSelector((state: AppState) => state.albumReducer)

    return (
        <div id="description">
            <div className="top">
                <div className="id">#</div>
                <div className="title">Title</div>
                <div className="album">Album</div>
                <div className="time"><i className="material-icons">timer</i></div>
                <div className="addToFavourite"><i className="material-icons">add</i></div>
                <div className="play"><i className="material-icons">play_circle_outline</i></div>
            </div>
            {currentAlbumSongs.map((songs, index) => {
                const { dir, file, size } = songs
                return <SongLabel album={dir} name={file} size={size} id={index} key={index} />
            })}
        </div>
    );
};

export default Description;