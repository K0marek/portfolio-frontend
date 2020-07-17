import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeVolume } from '../../actions/playerActions/changeVolume';
import { AppState } from '../../store';

const VolumeControl = () => {

    const [iconState, setIconState] = useState('down')
    const [previousVolume, setPreviousVolume] = useState(40)

    const { volume } = useSelector((state: AppState) => state.albumReducer)

    const dispatch = useDispatch()

    const handleIconClick = (): void => {
        if (iconState === 'mute') {
            dispatch(changeVolume(previousVolume))
            if (previousVolume > 0 && previousVolume <= 50)
                setIconState('down')
            else if (previousVolume !== 0)
                setIconState('up')
        } else {
            setIconState('mute')
            dispatch(changeVolume(0))
        }
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const volume = parseInt(e.target.value)
        setPreviousVolume(volume)
        dispatch(changeVolume(volume))
        if (volume === 0)
            setIconState('mute')
        else if (volume > 0 && volume <= 50)
            setIconState('down')
        else
            setIconState('up')
    }

    return (
        <div id="volumeControl">
            <i className="material-icons" onClick={handleIconClick}>{`volume_${iconState}`}</i>
            <input type="range" min="0" max="100" className="volumeBar" value={volume} onChange={handleVolumeChange} />
        </div>
    );
};

export default VolumeControl;