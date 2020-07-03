import React, { useEffect } from 'react';
import './Player.css';
import AlbumsContainer from './AlbumsContainer';
import { loadAlbums } from '../../actions/loadAlbums'
import { useDispatch } from 'react-redux';
import Description from './Description';
import Info from './Info';

const Player = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAlbums())
    })

    return (
        <div className="container-fluid">
            <AlbumsContainer />
            <Description />
            <Info />
        </div>
    );
};

export default Player;