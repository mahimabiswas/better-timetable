import Button from "shared/button";
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaPlus } from 'react-icons/fa';
import Table from "shared/table";
import { useState } from "react";
import AddClass from "./addClass";

export default function Scheduler() {
    const [openAddClass, setOpenAddClass] = useState(false);

    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    <p>Scheduler</p>
                    <h2>BCA Sem 3 Div A</h2>
                </div>
                <Button label="Add Class" onClick={() => setOpenAddClass(true)} icon={<FaPlus />} />
                <Button label="Update" icon={<HiOutlineRefresh />} />
            </div>
            <div className="scheduler">
                <AddClass open={openAddClass} setOpen={setOpenAddClass} />
                <Table />
            </div>
        </main>
    )
}