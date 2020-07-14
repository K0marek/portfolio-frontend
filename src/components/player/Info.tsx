import React from 'react';
import CurrentSongInfo from './CurrentSongInfo';
import PlayerControl from './PlayerControl';
import VolumeControl from './VolumeControl';

const Info = () => {
    return (
        <div id="info">
            <CurrentSongInfo />
            <PlayerControl />
            <VolumeControl />
        </div>
    );
};

export default Info;