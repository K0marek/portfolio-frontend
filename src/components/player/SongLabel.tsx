import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong } from '../../actions/playerActions/playSong'
import { AppState } from '../../store';
import { addToFavourite } from '../../actions/playerActions/addToFavourite';
import { removeFromFavourite } from '../../actions/playerActions/removeFromFavourite';
import { Song, FavouriteSong } from '../../types/Player';
import { pauseSong } from '../../actions/playerActions/pauseSong';

interface SongProps {
    album: string,
    name: string,
    size: string,
    duration: number,
    id: number,
    favourite: boolean
}

const SongLabel = ({ album, name, size, duration, id, favourite }: SongProps) => {

    const [isFavourite, setIsFavourite] = useState(favourite)

    useEffect(() => {
        setIsFavourite(favourite)
    }, [favourite])

    const songName: string = name.slice(3, -4)
    const minutes: string = (Math.ceil(duration) / 60).toFixed()
    const seconds: number = Math.ceil(duration) % 60
    const durationString: string = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`

    const [thisPlaying, setThisPlaying] = useState(false)
    const { isPlaying, currentSelectedAlbum, currentPlaySong } = useSelector((state: AppState) => state.albumReducer)
    const { currentAlbumSongs } = useSelector((state: AppState) => state.albumReducer)

    useEffect(() => {
        const nr = id < 9 ? '0' + (id + 1).toString() : id + 1
        const fullName = `${nr} ${songName}`
        if (isPlaying === true) {
            if (currentSelectedAlbum === album && currentPlaySong === fullName)
                setThisPlaying(true)
            else
                setThisPlaying(false)
        } else setThisPlaying(false)
    }, [currentPlaySong, isPlaying])

    const dispatch = useDispatch()
    const { token, userId } = useSelector((state: AppState) => state.signReducer)

    const handlePlay = () => {
        if (thisPlaying) {
            dispatch(pauseSong())
        } else {
            dispatch(playSong(songName, id, album, currentAlbumSongs))
        }
    }

    const handleFavouriteClick = () => {
        if (!token) alert('Please login first')
        else {
            const song: Song = {
                album,
                name,
                size,
                duration
            }
            const favouriteSong: FavouriteSong = {
                song,
                userId
            }
            if (isFavourite)
                dispatch(removeFromFavourite(favouriteSong))
            else
                dispatch(addToFavourite(favouriteSong))
            setIsFavourite(!isFavourite)
        }
    }
    return (
        <div className="songLabel">
            <div className="id">{id + 1}</div>
            <div className="title">{songName}</div>
            <div className="album">{album}</div>
            <div className="time">{durationString}</div>
            <div className="favourite"><i className="material-icons" onClick={handleFavouriteClick}>{isFavourite ? 'delete_sweep' : 'favorite_border'}</i></div>
            <div className="play"><i className="material-icons" onClick={handlePlay}>{thisPlaying ? 'pause_circle_outline' : 'play_circle_outline'}</i></div>
        </div>
    );
};

export default SongLabel;