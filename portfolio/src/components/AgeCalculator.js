import React, { useState } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgeCalculator.css';

function AgeCal() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

    const handleInputChange = (e) => {
        setDob(e.target.value);
    };

    const calculateAge = () => {
        const birthday = new Date(dob);
        const today = new Date();

        let years = today.getFullYear() - birthday.getFullYear();
        let months = today.getMonth() - birthday.getMonth();
        let days = today.getDate() - birthday.getDate();

        if (days < 0) {
            months -= 1;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        setAge({ years, months, days });
    };

    return (




        <div className='gh age'>
            <g className='s'>Age Calculator</g><br />
            <br />
            <input className='g1' type="date" value={dob} onChange={handleInputChange} /><br />
            <br />

            <button className='g1' onClick={calculateAge} >Calculate Age</button><br />
            <br />
            <p className='g'>Age: {age.years} years, {age.months} months, {age.days} days</p>




        </div>



    );
}

export default AgeCal;