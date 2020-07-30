import React, { useEffect, useState } from 'react';
import './Player.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

const AudioPlayer = () => {

    const { currentSongAlbum, currentPlaySong, isPlaying, volume } = useSelector((state: AppState) => state.albumReducer)
    const [audioSrc, setAudioSrc] = useState('')

    useEffect(() => {
        const src = `http://localhost:8080/api/albums/${currentSongAlbum}/${currentPlaySong}`
        setAudioSrc(src)
        const audio: HTMLAudioElement = (document.getElementById('audioPlayer') as HTMLAudioElement)
        audio.load()
    }, [currentPlaySong])

    useEffect(() => {
        const audio: HTMLAudioElement = (document.getElementById('audioPlayer') as HTMLAudioElement)
        if (isPlaying) {
            audio.play()
        } else {
            audio.pause()
        }
    }, [currentPlaySong, isPlaying])

    useEffect(() => {
        const audio: HTMLAudioElement = (document.getElementById('audioPlayer') as HTMLAudioElement)
        const value = volume / 100
        audio.volume = value
    }, [volume])

    return (
        <audio id="audioPlayer">
            <source src={audioSrc} />
        </audio>
    );
};

export default AudioPlayer;