import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import './addClass.scss';
import TextField from 'shared/textfield';
import Select from 'shared/select';
import Radio from 'shared/radio';
import { useEffect, useState } from 'react';
import Button from 'shared/button';
import axios from 'axios';


function SelectSubject({ subjectList }) {
    const options = subjectList.map(subject => ({ value: subject._id, label: subject.longName }));

    const [subject, setSubject] = useState(null);

    return (
        <Select title='subject' options={options} value={subject} onChange={(e) => {
            setSubject(e);
        }}
        />
    )
}

function SelectFaculty({ staffList }) {
    const options = staffList.map(staff => ({ value: staff.id, label: staff.name }));

    const [faculty, setFaculty] = useState(null);

    return (
        <Select title='faculty' options={options} value={faculty} onChange={(e) => setFaculty(e)} />
    )
}

function SelectDivision() {
    const options = [
        { value: 1, label: 'A' },
        { value: 2, label: 'B' },
        { value: 3, label: 'C' },
    ];

    const [division, setDivision] = useState({});

    return (
        <Select creatable title='division' options={options} value={division} onChange={(e) => setDivision(e)} />
    )
}

function SelectDays() {
    const options = [
        { value: 1, label: 'mon' },
        { value: 2, label: 'tues' },
        { value: 3, label: 'wed' },
        { value: 4, label: 'thurs' },
        { value: 5, label: 'fri' },
        { value: 6, label: 'sat' },
        { value: 7, label: 'sun' },
    ];

    const [days, setDays] = useState(null);

    return (
        <Select styles={{ gridColumn: '1 / 3' }} multiple title='days' options={options} value={days} onChange={(e) => setDays(e)} />
    )
}



export default function AddClass({ open, setOpen, programId, batchId }) {

    const [staffList, setStaffList] = useState([]);
    const [subjectList, setSubjectList] = useState([]);
    useEffect(() => {
        if (programId && batchId) {
            axios.get('/staff/list').then(response => {
                setStaffList(response.data.staffs);
            });

            axios.get('/subject/get/?programId=' + programId).then(response => {
                setSubjectList(response.data.subjects);
            })
        }
    }, [programId, batchId]);

    const [scheduleType, setScheduleType] = useState(0);
    const [staff, setStaff] = useState('');
    const [subject, setSubject] = useState('');
    const [days, setDays] = useState([]);
    const [date, setDate] = useState(null);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [division, setDivision] = useState('');
    const [group, setGroup] = useState(null);


    const [dataVerified, setDataVerified] = useState(false);
    // TODO: Kushagra
    useEffect(() => {

        if (scheduleType > 1) {
            setDataVerified(false);
        }



    }, [scheduleType, staff, subject, days, date])


    return (
        <>
            <Modal
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                style={{
                    overlay: {
                        background: 'rgb(16, 17, 19, 0.85)',
                        zIndex: 1002
                    },
                    content: {
                        opacity: 1,
                        top: '80px',
                        width: '600px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: '500px',
                        background: 'var(--background)',
                        border: 'none',
                    }
                }}
                contentLabel="Example Modal"
            >
                <div className='header'>
                    <h3>Add Class</h3>
                    <div className='close' onClick={() => { setOpen(false) }}><MdClose /></div>
                </div>
                <div className='form'>
                    <SelectSubject subjectList={subjectList} />
                    <SelectFaculty staffList={staffList} />
                    <Radio title='subject type'
                        options={[{ value: '1', label: 'core' }, { value: '2', label: 'elective' }]}
                        name="subject-type" defaultSelected={0} onChange={(e) => { console.log(e) }}
                    />
                    <Radio title='schedule type'
                        options={[{ value: '1', label: 'weekly' }, { value: '2', label: 'once' }]}
                        name="schedule-type" defaultSelected={scheduleType} onChange={(e) => { setScheduleType(e) }}
                    />
                    {scheduleType === 0 ?
                        <SelectDays />
                        :
                        <TextField title="date" type='date' styles={{ gridColumn: '1 / 3' }} />
                    }
                    <TextField title="time from" type='number' />
                    <TextField title="time to" type='number' />
                    <SelectDivision />
                    <TextField title="group" type='number' />
                    <Button label='Add Class' size='medium' styles={{ background: 'var(--dark)', color: 'var(--white)' }} />
                </div>

            </Modal>
        </>
    )
}