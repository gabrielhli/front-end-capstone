import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './ReportsLayout.css';

const ReportsLayout = () => {
    const [data, setData] = useState([
        {
            "Serial Number": "1",
            "Doctor Name": "Dr. John Doe",
            "Doctor Speciality": "Cardiology",
            "View Report": "",
            "Download Report": ""
            },
        {
            "Serial Number": "2",
            "Doctor Name": "Dr. Jane Smith",
            "Doctor Speciality": "Dermatology",
            "View Report": "",
            "Download Report": ""
        }
    ]);
    const heading = Object.keys(data[0]);

    const HandleRow = ({ row }, key) => {
        return (
            <tr key={key}>
                <td key="Serial Number">{row["Serial Number"]}</td>
                <td key="Doctor Name">{row["Doctor Name"]}</td>
                <td key="Doctor Speciality">{row["Doctor Speciality"]}</td>
                <td key="View Report">
                    <a href={process.env.PUBLIC_URL + "/patent_report.pdf"}><button>View Report</button></a>
                </td>
                <td key="Download Report">
                    <a href={process.env.PUBLIC_URL + "/patent_report.pdf"} download><button>Download Report</button></a>
                </td>
            </tr>
        );
    };

    return (
        <div className="reports-container">
            <div className="reports-title">
                <h1>Reports</h1>
            </div>
            <div className="reports-content">
                <table className="reports-table">
                    <thead>
                        <tr className="reports-headers">
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

export default ReportsLayout;