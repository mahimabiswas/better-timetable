import Button from "shared/button";
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaPlus } from 'react-icons/fa';
import Table from "shared/table";
import { useEffect, useState } from "react";
import AddLecture from "./addLecture";
import { useParams } from 'react-router-dom';
import Select from "shared/select";
import axios from 'axios';


export default function Scheduler() {
    const [openAddClass, setOpenAddClass] = useState(false);
    const { program, batch } = useParams();

    const [divisions, setDivisions] = useState(null);
    const [selectedDivision, setSelectedDivision] = useState(null);

    useEffect(() => {
        axios.get('batch/division/?batchId=' + batch).then(res => {
            setDivisions(res.data.divisions.map(d => ({ value: d, label: 'Div ' + d })))
        }).catch(e => {
            console.log(e);
        });
    }, [batch]);

    useEffect(() => {

    }, [batch, selectedDivision]);
    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    <p>Scheduler</p>
                    <h2>BCA Sem 3 Div A</h2>
                    <Select options={divisions} value={selectedDivision} onChange={(e) => setSelectedDivision(e)} />
                </div>
                <Button label="Add Class" onClick={() => setOpenAddClass(true)} icon={<FaPlus />} />
                <Button label="Update" icon={<HiOutlineRefresh />} />
            </div>
            <div className="scheduler">
                <AddLecture open={openAddClass} setOpen={setOpenAddClass} programId={program} batchId={batch} />
                <Table schedule={[]} />
            </div>
        </main>
    )
}