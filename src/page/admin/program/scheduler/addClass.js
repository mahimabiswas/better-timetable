import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import './addClass.scss';
import TextField from 'shared/textfield';

export default function AddClass({ open, setOpen }) {

    return (
        <>
            <Modal
                isOpen={open}
                onAfterOpen={() => { console.log('aa') }}
                onRequestClose={() => setOpen(false)}
                style={{
                    overlay: {
                        background: 'rgb(16, 17, 19, 0.85)',
                    },
                    content: {
                        opacity: 1,
                        top: '80px',
                        width: '600px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: '500px',
                        background: 'var(--background)',
                        border: 'none'
                    }
                }}
                contentLabel="Example Modal"
            >
                <div className='header'>
                    <h3>Select electives</h3>
                    <div className='close' onClick={() => { setOpen(false) }}><MdClose /></div>
                </div>
                <div>
                    <TextField title="subject" />
                    <TextField title="faculty" />
                    <TextField title="time from" />
                    <TextField title="time to" />

                // weekly or once
                // day or date
                // elective or common
                // div
                // group

                // submit
                </div>

            </Modal>
        </>
    )
}