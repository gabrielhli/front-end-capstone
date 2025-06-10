import React from 'react';
import './ReviewForm.css';
import GiveReviews from './GiveReviews';

const ReviewBtn = () => {
    return (
        <button>Click Here</button>
    );
};

const ReviewForm = () => {
    //const heading = ["Serial Number","Doctor Name","Doctor Speciality", "Provide Feedback","Review Given"];
    const data = [
        {
            "Serial Number": "1",
            "Doctor Name": "Dr. John Doe",
            "Doctor Speciality": "Cardiology",
            "Provide Feedback": <ReviewBtn/>,
            "Review Given": ""
            },
        {
            "Serial Number": "2",
            "Doctor Name": "Dr. Jane Smith",
            "Doctor Speciality": "Dermatology",
            "Provide Feedback": <ReviewBtn/>,
            "Review Given": ""
        }
    ]
    const heading = Object.keys(data[0]);


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
                        {data.map((row, index) => (
                            <tr key={index}>
                                {heading.map((header) => (
                                    <td key={header}>{row[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ReviewForm