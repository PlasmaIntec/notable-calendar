import React from 'react';

const PhysiciansList = (props) => {
    let className;
    const { physicians, selectPhysicianHandler, physician } = props;
    return (
        <div className='left'>
            {
                physicians && physicians.length > 0 ?
                <div>
                    <h2>PHYSICIANS</h2>
                    {
                        physicians.map(doctor => {
                            if (physician && doctor.id === physician.id) {
                                className = 'selected item';
                            } else {
                                className = 'item';
                            }
                            return (
                                <div 
                                    key={doctor.id}
                                    onClick={selectPhysicianHandler}
                                    className={className}
                                >
                                    {doctor.name}
                                </div>
                            )
                        })
                    }                
                </div> :
                <div> NO PHYSICIANS </div>
            }
        </div>
    )
}

export default PhysiciansList;