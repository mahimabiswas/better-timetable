import React from 'react';
import './styles.scss';

function Top() {
    return (
        <div className='top'>
            <div className='meta'>
                <p>Wednesday, 24 June</p>
                <h2>BCA Sem 3 Div A</h2>
            </div>
            <button>share</button>
        </div>

    )
}
export default function TimeTable() {
    return (
        <div className='timetable'>
            <Top />
            <div className='table'>
                <div className='cells'>
                    {[...Array(24 * 2 * 7)].map(() =>
                        <div className='cell'></div>
                    )}
                </div>
            </div>
        </div>
    )
}