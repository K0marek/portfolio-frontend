import React from 'react';
import CurrentSongInfo from './CurrentSongInfo';
import PlayerControl from './PlayerControl';
import VolumeControl from './VolumeControl';
import Duration from './Duration';

const Info = () => {
    return (
        <div id="info">
            <CurrentSongInfo />
            <div id="controls">
                <PlayerControl />
                <Duration />
            </div>
            <VolumeControl />
        </div>
    );
};

export default Info;