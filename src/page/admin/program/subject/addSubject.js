import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import TextField from 'shared/textfield';
import Radio from 'shared/radio';
import Button from 'shared/button';

export default function AddSubject({ open, setOpen }) {
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
            contentLabel="Example Modal"
        >
            <div className='header'>
                <h3>Add Subject</h3>
                <div className='close' onClick={() => { setOpen(false) }}><MdClose /></div>
            </div>
            <div className='form' style={{ display: 'unset' }}>
                <TextField title='short name' />
                <TextField title='long name' styles={{ margin: '12px 0' }} />
                <Radio title='subject type'
                    options={[{ value: '1', label: 'core' }, { value: '2', label: 'elective' }]}
                    name="subject-type" defaultSelected={0} onChange={(e) => { console.log(e) }}
                />
                <Button label='Confirm' size='medium' styles={{
                    marginTop: '24px'
                }} />
            </div>
        </Modal>
    )

}