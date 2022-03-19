import axios from "axios";
import Button from "shared/button";
import TextField from "shared/textfield";
import { useUser } from '../../util/auth/useUser';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './styles.scss';

export default function Account() {
    const { removeUser } = useUser()
    const history = useHistory()
    const handleSignOut = () => {
        axios.get('./auth/signout').then(() => {
            removeUser();
            history.push('/timetable')
        }).catch(e => {
            alert(e.response.data)
        })
    }

    const [name, setName] = useState('Anish');
    const [designation, setDesignation] = useState('Teacher');
    const [email, setEmail] = useState('alpha@beta.com');
    const [contactNumber, setContactNumber] = useState('7845122154');

    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    {/* <p>Wednesday, 24 June</p> */}
                    <h2>Account</h2>
                </div>
                <Button label="Sign Out" onClick={handleSignOut} />
            </div>
            <div className="account">
                <TextField value={name} onChange={setName} type='text' placeholder="itsme@some.org" title="name" name="account-name" styles={{ marginBottom: '12px' }} />
                <TextField value={designation} onChange={setDesignation} type='text' placeholder="professor" title="role" name="account-role" styles={{ marginBottom: '12px' }} />
                <TextField value={email} onChange={setEmail} type='email' placeholder="itsme@some.org" title="email" name="account-email" styles={{ marginBottom: '12px' }} />
                <TextField value={contactNumber} onChange={setContactNumber} type='text' placeholder="0000000000" title="contact number" name="account-contact-number" styles={{ marginBottom: '36px' }} />
                <Button size="medium" label='Update Changes' />
            </div>
        </main>
    )
}