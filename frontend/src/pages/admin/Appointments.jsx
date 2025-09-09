import React from 'react';

const Appointments = () => {
    // Demo data
    const appointments = [
        { id: 1, name: 'John Doe', date: '2024-06-10', time: '10:00 AM' },
        { id: 2, name: 'Jane Smith', date: '2024-06-11', time: '2:00 PM' },
        { id: 3, name: 'Alice Johnson', date: '2024-06-12', time: '11:30 AM' },
    ];

    return (
        <div>
            <h2>Appointments</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(app => (
                        <tr key={app.id}>
                            <td>{app.id}</td>
                            <td>{app.name}</td>
                            <td>{app.date}</td>
                            <td>{app.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Appointments;