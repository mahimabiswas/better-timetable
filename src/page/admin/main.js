import Button from "shared/button";
import { FaPlus } from 'react-icons/fa';
import Programmes from "./programmes";
import './styles.scss';
import StaffList from "./staff/list";

export default function Main() {
    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    {/* <p>Wednesday, 24 June</p> */}
                    <h2>Admin Dashboard</h2>
                </div>
                <div className="actions">
                    <Button label="Add New Program" icon={<FaPlus />} />
                </div>
            </div>
            <div className="admin-dashboard">
                <Programmes />
                <StaffList />
            </div>
        </main>
    )
}