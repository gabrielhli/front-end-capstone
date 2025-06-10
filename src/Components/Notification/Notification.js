import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));

        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
        else {
            setIsLoggedIn(false);
            setUsername("");
        }

        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }
        else {
            setDoctorData(null);
        }

        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
        }
        else {
            setAppointmentData(null);
        }
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            {children}
            {isLoggedIn && appointmentData && (
                <>
                <div className="appointment-card">
                    <div className="appointment-card__content">
                        <h3 className="appointment-card__title">Appointment Details</h3>
                        <p className="appointment-card__message">
                            <strong>Doctor:</strong> {doctorData?.name} <br />
                            <strong>Speciality:</strong> {doctorData?.speciality} <br />
                            <strong>Name:</strong> {appointmentData?.name} <br />
                            <strong>Phone Number:</strong> {appointmentData?.phone} <br />
                            <strong>Date of Appointment</strong> {appointmentData?.date} <br />
                            <strong>Time Slot:</strong> {appointmentData?.time}
                        </p>
                    </div>
                </div>
                </>
            )}
        </div>
    );
};

export default Notification;