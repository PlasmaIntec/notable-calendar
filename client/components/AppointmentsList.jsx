import React from 'react';

const AppointmentsList = (props) => {
    const { physician } = props;
    return (
        <div className='right'>
            {
                physician && physician.appointments && physician.appointments.length > 0 ?
                <div>
                    <h1>{`Dr. ${physician.name}`}</h1>
                    <h5>{physician.email}</h5>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Kind</th>
                        </tr>
                        {
                            physician.appointments.map((appointment, index) => (
                                <tr 
                                    key={appointment.id}
                                >
                                    <td>{index}</td>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.kind}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div> :
                <div> NO APPOINTMENTS </div>
            }
        </div>
    )
}

export default AppointmentsList;