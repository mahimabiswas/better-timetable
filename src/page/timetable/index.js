import React, { useEffect, useRef, useState } from 'react';
import Button from 'shared/button';
import './styles.scss';
import { FaShare } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import date from 'date-and-time';
import ordinal from 'date-and-time/plugin/ordinal';
// import convertTime from 'convert-time';
// import randomColor from 'randomcolor';
// import schedule from './merged.json'

date.plugin(ordinal);

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

function Top() {
    const pattern = date.compile('dddd, DDD MMMM');
    return (
        <div className='top'>
            <div className='meta'>
                <p>{date.format(new Date(), pattern)}</p>
                <h2>BCA Sem 3 Div A</h2>
            </div>
            <Button label="Share" icon={<FaShare />} />
        </div>
    )
}

// function getColCount(time) {
//     let ti = true, i = 1, t = 0;
//     while (t < time) {
//         ti = !ti
//         t += 30;
//         if (ti) {
//             t += 40;
//         }
//         i++;
//     }
//     return i;
// }

function convertTime(time) {
    if (time.length < 4) {
        return time;
    }
    let h = parseInt(time.substr(0, 2));
    let m = parseInt(time.substr(2, 4));

    return `${h < 13 ? h : h - 12}${m === 0 ? '' : ':' + m
        }${h < 13 ? 'am' : 'pm'}`
}

const dist = 42;

function getPosition() {
    const now = date.format(new Date(), 'HH:mm').split(':')
    const h = now[0];
    const m = now[1];
    let pos = h * 2 * dist;
    pos += m * (dist / 30);
    return pos;
}

export default function TimeTable() {
    const [currentTime, setCurrentTime] = useState(getPosition);
    const table = useRef();
    useEffect(() => {
        table.current.scrollTo(getPosition() - 200, 0);
        setInterval(() => {
            setCurrentTime(getPosition());
        }, 60 * 1000);
    }, [])


    return (
        <main>
            <Top />
            <div className='timetable' >
                <div className='days'>
                    <div className='day'>mon</div>
                    <div className='day'>tue</div>
                    <div className='day'>wed</div>
                    <div className='day'>thur</div>
                    <div className='day'>fri</div>
                    <div className='day'>sat</div>
                    <div className='day'>sun</div>
                </div>
                <div className='table' ref={table}>
                    <div className='currentTime' style={{ marginLeft: `${currentTime}px` }} />
                    <div className='timestamps'>
                        {times.map((t) =>
                            <div className='timestamp'><p>
                                {convertTime(t)}
                            </p></div>
                        )}
                    </div>
                    <div className='cells'>
                        {[...Array(24 * 2 * 7)].map(() =>
                            <div className='cell'></div>
                        )}
                    </div>
                    <div className='classes'>
                        {/* temp */}
                        <div className='class class1'>Machine Learning Grp 1</div>
                        <div className='class class2'>Blockchain Grp 1</div>
                        <div className='class class3'>Server Side Web Technology</div>
                        <div className='class class4'>IOT Grp 1</div>

                        {/* {schedule.map(_class => (
                            <div className='class'
                                style={{
                                    gridRow: _class.day,
                                    background: randomColor({
                                        seed: _class.label,
                                        luminosity: 'dark'
                                    }),
                                    boxShadow: `0px 4px 9px ${randomColor({
                                        seed: _class.label,
                                        luminosity: 'dark',
                                        format: 'hex'
                                    })}99`,
                                    gridColumnStart: getColCount(_class.from),
                                    gridColumnEnd: getColCount(_class.to)
                                }}><p>{_class.label}</p></div>
                        ))} */}
                    </div>
                </div>
            </div>
            <div className='drawer'>
                <div className='overlay' />
                <div className='content'>
                    <div className='header'>
                        <h3>Select electives</h3>
                        <div className='close'><MdClose /></div>
                    </div>
                    <div className='subjectList'>
                        <div className='checked'><label>Machine Learning Grp - 1</label><span className='checked'><BsCheck /></span></div>
                        <div><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                        <div className='checked'><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                        <div><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                        <div className='checked'><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                        <div><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                        <div className='checked'><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                        <div className='checked'><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                        <div className='checked'><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                        <div><label>Machine Learning Grp - 1</label><span><BsCheck /></span></div>
                    </div>
                </div>
            </div>
        </main>
    )
}