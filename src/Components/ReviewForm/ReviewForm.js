import React, { useState } from 'react';
import './ReviewForm.css';
import GiveReviews from '../GiveReviews/GiveReviews';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ReviewForm = () => {
    const ReviewBtn = () => {
        return (
            <Popup
                trigger={
                    <button>Click Here</button>
                }
                modal
                open={showModal}
                onClose={() => setShowModal(false)}
                >
            <GiveReviews onSubmit={handleFormSubmit}/>
            </Popup>
        );
    };

    const HandleRow = ({ row }, key) => {
        return (
            <tr key={key}>
                <td key="Serial Number">{row["Serial Number"]}</td>
                <td key="Doctor Name">{row["Doctor Name"]}</td>
                <td key="Doctor Speciality">{row["Doctor Speciality"]}</td>
                <td key="Provide Feedback"><ReviewBtn /></td>
                <td key="Review Given">{row["Review Given"]}</td>
            </tr>
        );
    };

    const [showModal, setShowModal] = useState(false);
    const [reviews, setReviews] = useState([])
    const data = [
        {
            "Serial Number": "1",
            "Doctor Name": "Dr. John Doe",
            "Doctor Speciality": "Cardiology",
            "Provide Feedback": "",
            "Review Given": ""
            },
        {
            "Serial Number": "2",
            "Doctor Name": "Dr. Jane Smith",
            "Doctor Speciality": "Dermatology",
            "Provide Feedback": "",
            "Review Given": ""
        }
    ];
    const heading = Object.keys(data[0]);;

    const handleReview = () => {
        setShowModal(true);
    };

    const handleFormSubmit = (reviewData) => {
        const newReview = {
            ...reviewData
        };
        const updatedReview = [...reviews, newReview];
        setReviews(updatedReview);
        setShowModal(false);
    }

    return (
        <div className="reviewForm-container">
            <div className="reviewForm-title">
                <h1>Reviews</h1>
            </div>
            <div className="reviewForm-content">
                <table className="reviewForm-table">
                    <thead>
                        <tr className="reviewForm-headers">
                            {heading.map((header) => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dr John Doe</td>
                            <td>Cardiology</td>
                            <td><ReviewBtn /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dr Jane Smith</td>
                            <td>Dermatology</td>
                            <td><ReviewBtn /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ReviewForm