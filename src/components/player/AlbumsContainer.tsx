import React from 'react';
import { useSelector } from 'react-redux'
import { AppState } from '../../store';

const AlbumsContainer = () => {

    const { albumsNames } = useSelector((state: AppState) => state.albumReducer)

    const changeAlbum = () => {
        console.log('ee')
    }

    return (
        <div id='albums' >
            <ul className="albumsList">
                {
                    albumsNames.map((album: any, index: any) =>
                        <li key={index} className="albumName" onClick={changeAlbum}>
                            <a href="#">{album}</a>
                        </li>
                    )
                }
            </ul>
        </div >
    );
};

export default AlbumsContainer;