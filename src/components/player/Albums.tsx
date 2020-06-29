import React, { useState, useEffect } from 'react';

const Albums = () => {

    const [hasError, setErrors] = useState(false)
    const [albums, setAlbums] = useState([])
    const [files, setFiles] = useState({})


    const fetchData = async () => {
        try {
            const res = await fetch('https://localhost:8080/api/albums')
            const data = await res.json()
            const { dirs, files } = data
            setAlbums(dirs)
            setFiles(files)
        } catch (err) {
            setErrors(err)
        }
    }

    useEffect(() => { fetchData() })

    return (
        <div className='albums' >
            <ul className="nav artist">
                {
                    albums.map((album, index) =>
                        <li key={index}>
                            <a className="album">{album}</a>
                        </li>
                    )
                }
            </ul>
        </div >
    );
};

export default Albums;