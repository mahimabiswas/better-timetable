import React from 'react';
import './styles.scss';
import randomColor from 'randomcolor';

const schedule = [
    {
        label: "Machine Learning Grp 1",
        from: 1030,
        to: 1230,
        day: 1
    },
    {
        label: 'Blockchain Grp 1',
        from: 800,
        to: 1000,
        day: 2
    },
    {
        label: 'Basic Psychology Grp 1',
        from: 1330,
        to: 1530,
        day: 1
    },
    {
        label: 'Introduction to Java Enterprise Framework',
        from: 1130,
        to: 1330,
        day: 2
    },
    {
        label: 'Server Side Web Technology',
        from: 1300,
        to: 1530,
        day: 4
    },
    {
        label: 'Internet of Things Grp 1',
        from: 1600,
        to: 1800,
        day: 2
    },
    {
        label: 'Internet of Things - Grp 1',
        from: 1630,
        to: 1830,
        day: 4
    },
    {
        label: 'Current Trends and Practices in IT',
        day: 5,
        from: 1000,
        to: 1200
    }
];

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
                        {schedule.map(_class => (
                            <div className='class'
                                style={{
                                    gridRow: _class.day,
                                    background: randomColor({
                                        seed: _class.label,
                                        luminosity: 'bright'
                                    }),
                                    boxShadow: `3px 3px 9px ${randomColor({
                                        seed: _class.label,
                                        luminosity: 'bright',
                                        format: 'hex'
                                    })}99`,
                                    gridColumnStart: getColCount(_class.from),
                                    gridColumnEnd: getColCount(_class.to)
                                }}>{_class.label}</div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}