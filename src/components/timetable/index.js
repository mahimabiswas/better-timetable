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
    const times = ["00"];
    for (let t = 30, ti = true; t <= 2400; t += 30, ti = !ti) {
        let str = t.toString()
        for (let i = str.length; i < 4; i++) {
            str = "0" + str
        }
        times.push(str);
        if (ti) {
            t += 40;
        }
    }
    return (
        <div className='timetable'>
            <Top />
            <div className='table'>
                <div className='timestamps'>
                    {times.map((t) =>
                        <div className='timestamp'><p>{t}</p></div>
                    )}
                </div>
                <div className='cells'>
                    {[...Array(24 * 2 * 7)].map(() =>
                        <div className='cell'></div>
                    )}
                </div>
                <div className='classes'>
                    <div className='class class1'>Machine Learning Grp 1</div>
                    <div className='class class2'>Blockchain Grp 1</div>
                    <div className='class class3'>Server Side Web Technology</div>
                    <div className='class class4'>IOT Grp 1</div>

                </div>
            </div>
        </div>
    )
}