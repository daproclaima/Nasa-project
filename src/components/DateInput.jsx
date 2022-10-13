import  React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const DateInput = (props) => {
    const {setPickedDate} = props;
    const [startDate, setStartDate] = useState(new Date());

    const updatePhotoDataPickedDate = date => {
        setStartDate(date)
        
        if(setPickedDate) setPickedDate(date)
    }

    return <div>
        Séléctionner une date :
        <DatePicker selected={startDate} onChange={updatePhotoDataPickedDate}/>
    </div>
};

export default DateInput;