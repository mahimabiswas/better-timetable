import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import './addClass.scss';
import TextField from 'shared/textfield';
import Select from 'shared/select';
import Radio from 'shared/radio';
import Checkbox from 'shared/checkbox';
import { useState } from 'react';
import Button from 'shared/button';

export default function AddClass({ open, setOpen }) {

    const [checked, setChecked] = useState([1]);

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
                    <Select title='subject' options={[{ value: '1', label: 'IOT' }]} />
                    <Select title='faculty' options={[{ value: '1', label: 'Dr. Rajeeshree' }]} />
                    <TextField title="time from" type='number' />
                    <TextField title="time to" type='number' />
                    <TextField title="division" type='text' />
                    <TextField title="group" type='number' />
                    <Radio title='subject type'
                        options={[{ value: '1', label: 'core' }, { value: '2', label: 'elective' }]}
                    />
                    <Radio title='schedule type'
                        options={[{ value: '1', label: 'weekly' }, { value: '2', label: 'once' }]}
                    />
                    {/* <TextField title="date" type='date' /> */}
                    <Checkbox style={{ gridColumn: '1 / 3' }} title='days' options={[{ value: 1, label: 'mon' },
                    { value: 2, label: 'tues' },
                    { value: 3, label: 'wed' },
                    { value: 4, label: 'thur' },
                    { value: 5, label: 'fri' },
                    { value: 6, label: 'sat' },
                    { value: 7, label: 'sun' },
                    ]}
                        checked={checked} setChecked={setChecked} />
                    <Button label='Add Class' size='medium' styles={{ background: 'var(--dark)', color: 'var(--white)' }} />
                </div>

            </Modal>
        </>
    )
}