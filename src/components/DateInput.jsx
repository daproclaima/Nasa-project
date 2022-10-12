import  React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const DateInput = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            Séléctionner une date :
            <DatePicker />
        </div>
            
        
        
    );
};

export default DateInput;