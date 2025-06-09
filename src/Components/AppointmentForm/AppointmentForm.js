import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, date, time });
      setName('');
      setPhoneNumber('');
      setDate('');
      setTime('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="date">Date of Appointment:</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                />
        </div>
        <div className="form-group">
            <label htmlFor="time">Book Time Slot:</label>
            <select id="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Select a time slot" required>
                <option value="8 AM">8:00 AM</option>
                <option value="10 AM">10:00 AM</option>
                <option value="12 PM">12:00 PM</option>
                <option value="2 PM">2:00 PM</option>
                <option value="4 PM">4:00 PM</option>
                <option value="6 PM">6:00 PM</option>
            </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm