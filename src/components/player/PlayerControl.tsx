import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { pauseSong } from '../../actions/playerActions/pauseSong';
import { playSong } from '../../actions/playerActions/playSong';
import { previousSong } from '../../actions/playerActions/previousSong';
import { nextSong } from '../../actions/playerActions/nextSong';

const PlayerControl = () => {

    const { isPlaying, currentPlaySong, currentSongAlbum, currentPlaySongAlbumSongs } = useSelector((state: AppState) => state.albumReducer)

    const [isLoop, setIsLoop] = useState<boolean>(false)
    const [isShuffle, setIsShuffle] = useState<boolean>(false)
    const [historyOfPlaying, setHistoryOfPlaying] = useState<Number[]>([]) // used to remember shuffle order

    const dispatch = useDispatch()

    const getNextId = (): number => {
        let id: number = parseInt(currentPlaySong.slice(0, 2))
        const albumLength = currentPlaySongAlbumSongs.length
        let nextId: number
        if (isShuffle) {
            if (historyOfPlaying.length === currentPlaySongAlbumSongs.length) {// all songs in album was played when shuffle
                nextId = Math.floor(Math.random() * albumLength)
                setHistoryOfPlaying([nextId])
            } else {
                do {
                    nextId = Math.floor(Math.random() * albumLength)
                } while (historyOfPlaying.includes(nextId))
                setHistoryOfPlaying([...historyOfPlaying, (id - 1)])
            }
        } else {
            id === albumLength ? nextId = 0 : nextId = id
        }
        return nextId
    }

    const getPreviousId = (): any => {
        let id: number = parseInt(currentPlaySong.slice(0, 2))
        const albumLength = currentPlaySongAlbumSongs.length
        let previousId: Number | undefined
        if (isShuffle && historyOfPlaying.length !== 0) {
            const newHistoryOfPlaying = historyOfPlaying.slice(0)
            previousId = newHistoryOfPlaying.pop()
            setHistoryOfPlaying(newHistoryOfPlaying)
        } else {
            if (id === 1)
                previousId = albumLength - 1
            else
                previousId = id - 2
        }
        return previousId
    }

    useEffect(() => { // when song ends, load and play next song
        const audio: HTMLAudioElement = (document.getElementById('audioPlayer') as HTMLAudioElement)
        const dispatchNextSong = () => {
            const id: number = parseInt(currentPlaySong.slice(0, 2))
            let nextId: number = isLoop ? id - 1 : getNextId()
            dispatch(nextSong(nextId))
            if (isLoop) {
                audio.load()
                audio.play()
            }
        }
        audio.addEventListener('ended', dispatchNextSong)
        return () => audio.removeEventListener('ended', dispatchNextSong)
    }, [currentPlaySong, isLoop, dispatch])

    const handlePlayClick = () => {
        if (isPlaying) {
            dispatch(pauseSong())
        } else if (!isPlaying && currentPlaySong !== '') {
            const id = parseInt(currentPlaySong.slice(0, 2)) - 1
            const songName = currentPlaySong.slice(3, currentPlaySong.length)
            dispatch(playSong(songName, id, currentSongAlbum, currentPlaySongAlbumSongs))
        }
    }

    const handlePreviousClick = () => {
        const audio: HTMLAudioElement = (document.getElementById('audioPlayer') as HTMLAudioElement)
        if (audio.currentTime > 3) {
            audio.currentTime = 0
            audio.play()
        } else {
            const previousId = getPreviousId()
            if (currentPlaySong !== '')
                dispatch(previousSong(previousId))
        }
    }

    const handleNextClick = () => {
        const nextId = getNextId()
        if (currentPlaySong !== '')
            dispatch(nextSong(nextId))
    }

    const handleLoopClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const icon = e.target as HTMLElement
        if (isLoop) {
            icon.classList.remove('selected')
            setIsLoop(false)
        }
        else {
            icon.classList.add('selected')
            setIsLoop(true)
        }
    }

    const handleShuffleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const icon = e.target as HTMLElement
        if (isShuffle) {
            icon.classList.remove('selected')
            setIsShuffle(false)
            setHistoryOfPlaying([])
        }
        else {
            icon.classList.add('selected')
            setIsShuffle(true)
        }
    }

    return (
        <div id="playerControl">
            <i className="material-icons" onClick={handleLoopClick}>replay</i>
            <i className="material-icons" onClick={handlePreviousClick}>skip_previous</i>
            <i className="material-icons" onClick={handlePlayClick}>{isPlaying ? 'pause_circle_outline' : 'play_circle_outline'}</i>
            <i className="material-icons" onClick={handleNextClick}>skip_next</i>
            <i className="material-icons" onClick={handleShuffleClick}>shuffle</i>
        </div>
    );
};

export default PlayerControl;