import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

const CurrentSongInfo = () => {

    const { currentSongAlbum, currentPlaySong } = useSelector((state: AppState) => state.albumReducer)

    return (
        <div id="currentSongInfo">
            <p>{currentSongAlbum}</p>
            <p>{currentPlaySong}</p>
        </div>
    );
};

export default CurrentSongInfo;