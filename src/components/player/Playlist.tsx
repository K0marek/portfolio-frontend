import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { showPlaylist } from '../../actions/playerActions/showPlaylist';

const Playlist = () => {

    const { userPlaylist } = useSelector((state: AppState) => state.signReducer)

    const dispatch = useDispatch()

    const loadPlaylist = () => {
        dispatch(showPlaylist(userPlaylist))
    }

    return (
        <li className="albumLabel" onClick={loadPlaylist}>
            My music
        </li>
    );
};

export default Playlist;