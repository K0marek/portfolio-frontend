import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrentAlbum } from '../../actions/playerActions/changeCurrentAlbum'

interface AlbumLabelProps {
    albumName: string
}

const AlbumLabel = ({ albumName }: AlbumLabelProps) => {

    const dispatch = useDispatch()

    const handleChangeCurrentAlbum = () => {
        dispatch(changeCurrentAlbum(albumName))
    }

    return (
        <li className="albumLabel" onClick={handleChangeCurrentAlbum}>
            <a>{albumName}</a>
        </li>
    );
};

export default AlbumLabel;