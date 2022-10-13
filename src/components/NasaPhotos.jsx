import React, { Component } from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import DateInput from './DateInput';

const NASA_PHOTO_URL = "https://api.nasa.gov/planetary/apod?api_key=02bJOHRgY6rQUP6bV3VNoSsKAx4KpkxSedtKP42A"
const ERROR_MAX_DATE = 'ERROR_MAX_DATE'

const NasaPhotos = () => {
    const [photoData, setPhotoData] = useState([])
    const [pickedDate, setPickedDate] = useState()

    const updatePhotoFromPickedDate = date => {
        try {
            const currentDate = new Date()
            const isoCurrentDate = currentDate.toISOString().substring(0, 10)
            const isoDate = date.toISOString().substring(0, 10)
            
            const isPickedDateInferiorToCurrentDate = new Date(isoDate).valueOf() <= new Date(isoCurrentDate).valueOf()
            
            if(!isPickedDateInferiorToCurrentDate) {
                throw new Error(ERROR_MAX_DATE)
            }


            const url = `${NASA_PHOTO_URL}&date=${isoDate}`

            const photoDataPickedDate = axios.get(url).then(response => setPhotoData(response.data))
            
            setPhotoData(photoDataPickedDate)
        } catch(error) {
            if(error.message !== ERROR_MAX_DATE) {
                window.alert('Error at photo of the day fetch.')
                if(process.env.NODE_ENV === 'development') console.error(error)
            }
            
            if(error.message === ERROR_MAX_DATE) {
                window.alert('La date sélectionnée doit être inférieure ou égale à celle d\'aujourdhui.')
            }
        }
    }

    useEffect(() => {
        try {
            axios.get(NASA_PHOTO_URL).then(response => setPhotoData(response.data));

          // reset the value of pickedDate at NasaPhotos unmounting 
            return () => {
                setPickedDate()
            }
        } catch (error) {
            window.alert('Error at initial photo fetching.')
            if(process.env.NODE_ENV === 'development') console.error(error)
        }
    }, []);

    useEffect(() => {
        if(pickedDate) {
            updatePhotoFromPickedDate(pickedDate)
        }
    },[pickedDate])

    return <>
        <NavBar/>
        <div className='nasa-photo'>
            <img src={photoData.url} alt={photoData.title}/>
            <div>
                <h1>{photoData.title}</h1>
                <p className='date'>{photoData.date}</p>
                <p className='descrip'>{photoData.explanation}</p>
            </div>
        </div>
        <DateInput setPickedDate={setPickedDate}/>
    </>
        
};

export default NasaPhotos;