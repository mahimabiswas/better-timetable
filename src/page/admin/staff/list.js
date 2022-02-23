import profileImg from 'assets/sample_profile.jpg';
import Button from 'shared/button';
import { FaPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export default function StaffList({ showAddNew = true }) {
    const history = useHistory();

    return (
        <>
            <section className="right">
                <div className="section_header">
                    <h3 className="section_title">Staffs</h3>
                    {showAddNew &&
                        <Button label="Add New Staff" icon={<FaPlus />} onClick={() => history.push('/dashboard/staff')} />
                    }
                </div>
                <div className="teachers">
                    {[...Array(20)].map(c => (
                        <div className="teacher" key={c}>
                            <div className="details">
                                <img src={profileImg} alt="name" />
                                <div>
                                    <p className="name">Dr. Preti Kularni</p>
                                    <p className="email">preti.kulkarni@sicsr.ac.in</p>
                                </div>
                            </div>
                            <p className="class_count">25 classes</p>
                            <div className="show_on_hov">
                                <Button label="Remove" />
                            </div>
                            {/* <div>remove</div> */}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}