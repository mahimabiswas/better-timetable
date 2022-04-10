import Modal from 'shared/modal';
import TextField from 'shared/textfield';
import { useState } from 'react';
import Button from 'shared/button';
import axios from "axios";

export default function AddBatch({ open, setOpen, programId }) {
    const [shortName, setShortName] = useState("");
    const [longName, setLongName] = useState("");

    async function submit() {
        axios.post('/batch/add', {
            shortName,
            longName,
            programId
        }).then((res) => {
            alert("Batch Added to the Database id is="+res.data.id)
            setOpen(false);
        }).catch(e => {
            alert(e.response.data.err);
            setOpen(false);
        })
    }

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            header='Add Batch'
        >
            <TextField title='short name' type='text' name="short_name" value={shortName} onChange={setShortName} />
            <TextField title='long name' type='text' name="long_name" value={longName} onChange={setLongName} styles={{ margin: '12px 0' }} />
            <Button label='Confirm' size='medium' onClick={submit} styles={{
                marginTop: '24px'
            }} />
        </Modal>
    )

}