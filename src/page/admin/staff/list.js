import { useEffect, useState } from 'react';
import profileImg from 'assets/profile.webp';
import Button from 'shared/button';
import { FaPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import axios from 'axios';

export default function StaffList({ showAddNew = true }) {
    const history = useHistory();
    const [staffList, setStaffList] = useState([]);
    useEffect(() => {
        (async () => {

            const response = await axios.get('./staff/list');
            if (response.data) {
                setStaffList(response.data.staffs);
            }
        })();

    }, [])

    return (
        <>
            <section className="right">
                <div className="section_header">
                    <h3 className="section_title">Staffs</h3>
                    {showAddNew &&
                        <Button label="Add New Staff" icon={<FaPlus />} onClick={() => history.push('/dashboard/staff')} />
                    }
                </div>
                <div className="staffs">
                    {staffList && staffList.map(staff => (
                        <div className="staff" key={staff.email}>
                            <div className="details">
                                <img src={profileImg} alt="name" />
                                <div>
                                    <p className="name">{staff.name}</p>
                                    <p className="email">{staff.email}</p>
                                </div>
                            </div>
                            <p className={`role admin`} >{staff.role === 0 ? 'admin' : staff.role === 1 ? 'professor' : staff.role === 2 ? 'visiting' : 'viewer'}</p>
                            <p className="class_count">24 classes</p>
                            {/* <div className="show_on_hov">
                                <Button label="manage" />
                            </div> */}
                            {/* <div>remove</div> */}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}