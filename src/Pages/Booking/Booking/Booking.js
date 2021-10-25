import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const url = `http://localhost:5000/services/${serviceId}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h1>Booking of {service.name}</h1>
            <img src={service.image} alt="" />
            <p>{service.description}</p>
        </div>
    );
};

export default Booking;