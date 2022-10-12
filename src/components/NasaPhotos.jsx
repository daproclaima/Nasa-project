import React, { Component } from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import DateInput from './DateInput';


const NasaPhotos = () => {
    
    const [photoData, setPhotoData] = useState([])
    useEffect(() => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=02bJOHRgY6rQUP6bV3VNoSsKAx4KpkxSedtKP42A")
          .then((res) => setPhotoData(res.data));
    }, []);

    return (
        <>
            <NavBar/>
            <div className='nasa-photo'>
                <img src={photoData.url} alt={photoData.title}/>
                <div>
                    <h1>{photoData.title}</h1>
                    <p className='date'>{photoData.date}</p>
                    <p className='descrip'>{photoData.explanation}</p>
                </div>
            </div>
            <DateInput />
        </>
        
    );
};

export default NasaPhotos;