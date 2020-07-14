import React from 'react';
import { useSelector } from 'react-redux'
import { AppState } from '../../store';
import AlbumLabel from './AlbumLabel';
import Playlist from './Playlist';

const AlbumsContainer = () => {

    const { albumsNames } = useSelector((state: AppState) => state.albumReducer)

    return (
        <div id='albums' >
            <ul className="albumsList">
                <Playlist />
                {
                    albumsNames.map((albumName: string, index: number) => <AlbumLabel albumName={albumName} key={index} />)
                }
            </ul>
        </div >
    );
};

export default AlbumsContainer;