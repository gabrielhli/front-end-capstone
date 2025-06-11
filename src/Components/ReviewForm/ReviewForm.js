import React, { useState } from 'react';
import './ReviewForm.css';
import GiveReviews from '../GiveReviews/GiveReviews';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ReviewForm = () => {
    const ReviewBtn = ({ serialNumber }) => {
        return (
            <Popup
                trigger={
                    <button>Click Here</button>
                }
                modal
                open={showModal}
                onClose={() => setShowModal(false)}
                >
            <GiveReviews serialNumber={serialNumber} onSubmit={handleFormSubmit}/>
            </Popup>
        );
    };

    const HandleReview = ({ reviewData }) => {
        return (
            <p>
                {reviewData["name"]} - {reviewData["rating"]}/5: {reviewData["review"]}
            </p>
        );
    };

    const HandleRow = ({ row }, key) => {
        const review = row["Review Given"];

        return (
            <tr key={key}>
                <td key="Serial Number">{row["Serial Number"]}</td>
                <td key="Doctor Name">{row["Doctor Name"]}</td>
                <td key="Doctor Speciality">{row["Doctor Speciality"]}</td>
                <td key="Provide Feedback">
                    {review ? (
                        <button disabled className="btn-clicked">Review Saved</button>
                    ):(<ReviewBtn serialNumber={row["Serial Number"]}/>)}
                    
                </td>
                <td key="Review Given">
                    <div className="review-container">
                    {review && (
                        <HandleReview reviewData={review}/>)}
                    </div>
                </td>
            </tr>
        );
    };

    const [showModal, setShowModal] = useState(false);
    const [reviews, setReviews] = useState([])
    const [data, setData] = useState([
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
    ])
    const heading = Object.keys(data[0]);
    //console.log(data[0]["Review Given"]);

    const handleReview = () => {
        setShowModal(true);
    };

    const handleFormSubmit = (reviewData) => {
        const newReview = {
            ...reviewData
        };
        const reviewNumber = Number(Object.keys(reviewData));
        const serialNumber = (reviewNumber - 1).toString();
        const updatedReview = [...reviews, newReview];
        setReviews(updatedReview);
        setShowModal(false);
        data[serialNumber]["Review Given"] = reviewData[reviewNumber];
        //console.log(data[serialNumber]["Review Given"]);
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
                        {data.map((row, index) => (
                            <HandleRow row={row} key={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewForm