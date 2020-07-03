import React from 'react';

interface SongProps {
    album: string,
    name: string,
    size: string,
    id: number
}

const SongLabel = ({ album, name, size, id }: SongProps) => {

    const songName = name.slice(3, -4)

    return (
        <div className="songLabel">
            <div className="id">{id + 1}</div>
            <div className="title">{songName}</div>
            <div className="album">{album}</div>
            <div className="time">Time</div>
            <div className="addToFavourite">Add</div>
            <div className="play">Play</div>
        </div>
    );
};

export default SongLabel;