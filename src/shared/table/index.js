import React, { useEffect, useRef, useState } from 'react';
import date from 'date-and-time';
import ordinal from 'date-and-time/plugin/ordinal';
import './styles.scss';
import randomColor from 'randomcolor';

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

function getColCount(time) {
    let ti = true, i = 1, t = 0;
    while (t < time) {
        ti = !ti
        t += 30;
        if (ti) {
            t += 40;
        }
        i++;
    }
    return i;
}

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

export default function Table({ schedule }) {
    const [currentTime, setCurrentTime] = useState(getPosition);

    const table = useRef();
    useEffect(() => {
        table.current.scrollTo(getPosition() - 200, 0);
        setInterval(() => {
            setCurrentTime(getPosition());
        }, 60 * 1000);
    }, [])

    return (
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
                    {/* <div className='class class1'>Machine Learning Grp 1</div>
                    <div className='class class2'>Blockchain Grp 1</div>
                    <div className='class class3'>Server Side Web Technology</div>
                    <div className='class class4'>IOT Grp 1</div> */}

                    {schedule.map(_class => {
                        if (_class.day.length > 1) {
                            return _class.day.map(d => (
                                <div className='class'
                                    style={{
                                        gridRow: d,
                                        background: randomColor({
                                            seed: _class.longName,
                                            luminosity: 'dark'
                                        }),
                                        boxShadow: `0px 4px 9px ${randomColor({
                                            seed: _class.longName,
                                            luminosity: 'dark',
                                            format: 'hex'
                                        })}99`,
                                        gridColumnStart: getColCount(_class.time.from),
                                        gridColumnEnd: getColCount(_class.time.to)
                                    }}><p>{_class.longName}</p></div>
                            )
                            );
                        } else {
                            return (
                                <div className='class'
                                    style={{
                                        gridRow: _class.day[0],
                                        background: randomColor({
                                            seed: _class.longName,
                                            luminosity: 'dark'
                                        }),
                                        boxShadow: `0px 4px 9px ${randomColor({
                                            seed: _class.longName,
                                            luminosity: 'dark',
                                            format: 'hex'
                                        })}99`,
                                        gridColumnStart: getColCount(_class.time.from),
                                        gridColumnEnd: getColCount(_class.time.to)
                                    }}><p>{_class.longName}</p></div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}