import "./css/style.css";
import React from 'react';

function Table({ names }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th > Number</th>
                    <th>Names</th>
                </tr>
            </thead>
            <tbody>
                {names.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;







