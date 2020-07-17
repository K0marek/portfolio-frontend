import React, { useEffect, useState } from 'react';
import './Player.css';
import AlbumsContainer from './AlbumsContainer';
import { loadAlbums } from '../../actions/playerActions/loadAlbums'
import { useDispatch } from 'react-redux';
import Description from './Description';
import Info from './Info';
import AudioPlayer from './AudioPlayer';

const Player = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAlbums())
    }, [])

    return (
        <div className="container-fluid">
            <AlbumsContainer />
            <Description />
            <Info />
            <AudioPlayer />
        </div>
    );
};

export default Player;