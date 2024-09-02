import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Component.css';

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
      setDate(newDate);
    };
  
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
        <Calendar onChange={onChange} value={date} />
        <p>Selected Date: {date.toDateString()}</p>
      </div>
    );
}

export default MyCalendar
