import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

const CurrentSongInfo = () => {

    const { currentAlbum, currentPlaySong } = useSelector((state: AppState) => state.albumReducer)

    return (
        <div id="currentSongInfo">
            <p>{currentAlbum}</p>
            <p>{currentPlaySong}</p>
        </div>
    );
};

export default CurrentSongInfo;