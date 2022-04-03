import { useState } from 'react';
import Button from 'shared/button';
import './styles.scss';
import { FaShare } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { BsCheck, BsCalendarEvent } from 'react-icons/bs';
import { VscListSelection } from 'react-icons/vsc';
import date from 'date-and-time';
import Table from 'shared/table';
// import convertTime from 'convert-time';
// import randomColor from 'randomcolor';
// import schedule from './merged.json'





function Top({ setOpenElectiveSelector }) {
    const pattern = date.compile('dddd, DDD MMMM');
    return (
        <div className='top'>
            <div className='left'>
                <div className='meta'>
                    <p>{date.format(new Date(), pattern)} <div><BsCalendarEvent /></div></p>
                    <h2>BCA Sem 3 Div A <div>
                        <Button styles={{ marginLeft: '4px' }} onClick={() => { setOpenElectiveSelector(true) }} icon={<VscListSelection />} />
                    </div></h2>
                </div>
            </div>
            <Button label="Share" icon={<FaShare />} />
        </div>
    )
}



export default function TimeTable() {
    const [openElectiveSelector, setOpenElectiveSelector] = useState(false);

    return (
        <main>
            <Top setOpenElectiveSelector={setOpenElectiveSelector} />
            <Table />

            {openElectiveSelector &&
                <div className='drawer'>
                    <div className='overlay' />
                    <div className='content'>
                        <div className='header'>
                            <h3>Select electives</h3>
                            <div className='close' onClick={() => { setOpenElectiveSelector(false) }}><MdClose /></div>
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
                </div>}
        </main>
    )
}