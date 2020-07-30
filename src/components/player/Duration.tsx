import React, { useState, useEffect } from 'react';
import DurationBar from './DurationBar';

const Duration = () => {

    const [currentTime, setCurrentTime] = useState<string>('00:00')
    const [totalLength, setTotalLength] = useState<string>('00:00')

    const getFullTime = (duration: number): string => {
        const minutes: number = Math.floor(duration / 60)
        const seconds: number = Math.ceil(duration % 60)
        const fullMinutes: string = minutes < 10 ? `0${minutes}` : minutes.toString()
        const fullSeconds: string = seconds < 10 ? `0${seconds}` : seconds.toString()
        const time = `${fullMinutes}:${fullSeconds}`
        return time
    }

    useEffect(() => {
        const audio: HTMLAudioElement = (document.getElementById('audioPlayer') as HTMLAudioElement)
        audio.addEventListener('timeupdate', () => {
            const time = getFullTime(audio.currentTime)
            setCurrentTime(time)
        })
        audio.addEventListener('loadeddata', () => {
            const { duration } = audio
            const time = getFullTime(duration)
            setTotalLength(time)
        })
    }, [])

    return (
        <div className="duration">
            <div className="currentTime">{currentTime}</div>
            <DurationBar currentTime={currentTime} totalLength={totalLength} />
            <div className="totalLength">{totalLength}</div>
        </div>
    );
};

export default Duration;