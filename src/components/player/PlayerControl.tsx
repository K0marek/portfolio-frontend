import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { pauseSong } from '../../actions/playerActions/pauseSong';
import { playSong } from '../../actions/playerActions/playSong';

const PlayerControl = () => {

    const { isPlaying, currentPlaySong } = useSelector((state: AppState) => state.albumReducer)

    const dispatch = useDispatch()

    const handlePlayClick = () => {
        if (isPlaying) {
            dispatch(pauseSong())
        } else if (!isPlaying && currentPlaySong !== '') {
            const id = parseInt(currentPlaySong.slice(0, 2)) - 1
            const songName = currentPlaySong.slice(3, currentPlaySong.length)
            dispatch(playSong(songName, id))
        }
    }

    return (
        <div id="playerControl">
            <i className="material-icons">replay</i>
            <i className="material-icons">skip_previous</i>
            <i className="material-icons" onClick={handlePlayClick}>{isPlaying ? 'pause_circle_outline' : 'play_circle_outline'}</i>
            <i className="material-icons">skip_next</i>
            <i className="material-icons">shuffle</i>
            <div className="duration-bar"></div>
        </div>
    );
};

export default PlayerControl;