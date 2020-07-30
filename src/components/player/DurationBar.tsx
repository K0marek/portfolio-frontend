import React, { useEffect, useState } from 'react';

interface DurationProps {
    currentTime: string,
    totalLength: string
}

const DurationBar = ({ currentTime, totalLength }: DurationProps) => {

    const [progress, setProgress] = useState<string>('0%')

    const getTime = (value: string): number => {
        const minutes: number = parseInt(value.slice(0, 2))
        const seconds: number = parseInt(value.slice(3, 5))
        const time = minutes * 60 + seconds
        return time
    }

    useEffect(() => {
        const current = getTime(currentTime)
        const total = getTime(totalLength)
        const progress = current / total * 100
        if (!Number.isNaN(progress))
            setProgress(progress.toString() + '%')
    }, [currentTime, totalLength])

    const handleDurationClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        const div = document.getElementsByClassName('duration-bar')[0] as HTMLDivElement
        const width = div.offsetWidth
        const x = e.nativeEvent.offsetX
        const selectedTime = x / width * getTime(totalLength)
        const audio: HTMLAudioElement = (document.getElementById('audioPlayer') as HTMLAudioElement)
        audio.currentTime = selectedTime
    }

    return (
        <div className="duration-bar" onClick={handleDurationClick}>
            <div className="progress" style={{ width: progress }}></div>
        </div>
    );
};

export default DurationBar;