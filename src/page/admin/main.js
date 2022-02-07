import Button from "shared/button";
import { FaPlus } from 'react-icons/fa';
import Programmes from "./programmes";
import './styles.scss';
import profileImg from 'assets/sample_profile.jpg';

export default function Main() {
    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    {/* <p>Wednesday, 24 June</p> */}
                    <h2>Admin Dashboard</h2>
                </div>
                <div className="actions">
                    <Button label="Add New Batch" icon={<FaPlus />} />
                </div>
            </div>
            <div className="admin-dashboard">
                <Programmes />
                <section className="right">
                    <div className="section_header">
                        <h3 className="section_title">Teachers</h3>
                        <Button label="Add New Teacher" icon={<FaPlus />} />
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
            </div>
        </main>
    )
}