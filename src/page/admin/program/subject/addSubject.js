import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import TextField from 'shared/textfield';
import { useState } from 'react';
import Radio from 'shared/radio';
import Button from 'shared/button';

export default function AddSubject({ open, setOpen }) {
    const [shortName, setShortName] = useState("");
    const [longName, setLongName] = useState("");
    const [subjectType, setSubjectType] = useState(0);


    function submit() {
        const payload = {
            shortName,
            longName,
            subjectType
        }

        console.log(payload)
    }

    return (
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
            contentLabel="Add Subject Modal"
        >
            <div className='header'>
                <h3>Add Subject</h3>
                <div className='close' onClick={() => { setOpen(false) }}><MdClose /></div>
            </div>
            <div className='form' style={{ display: 'unset', margin: '0 16px' }}>
                <TextField title='short name' type='text' name="short_name" value={shortName} onChange={setShortName} />
                <TextField title='long name' type='text' name="long_name" value={longName} onChange={setLongName} styles={{ margin: '12px 0' }} />
                <Radio title='subject type'
                    options={[{ value: '1', label: 'core' }, { value: '2', label: 'elective' }]}
                    name="subject-type" defaultSelected={subjectType} onChange={(e) => { setSubjectType(e) }}
                />
                <Button label='Confirm' size='medium' onClick={submit} styles={{
                    marginTop: '24px'
                }} />
            </div>
        </Modal>
    )

}