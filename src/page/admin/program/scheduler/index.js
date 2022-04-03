import Button from "shared/button";
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaPlus } from 'react-icons/fa';
import Table from "shared/table";

export default function Scheduler() {
    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    <p>Scheduler</p>
                    <h2>BCA Sem 3 Div A</h2>
                </div>
                <Button label="Add Class" icon={<FaPlus />} />
                <Button label="Update" icon={<HiOutlineRefresh />} />
            </div>
            <div className="scheduler">
                <Table />
            </div>
        </main>
    )
}