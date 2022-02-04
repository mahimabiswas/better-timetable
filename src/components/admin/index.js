import Button from "components/shared/button";
import { FaPlus } from 'react-icons/fa';
import Programmes from "./programmes";
import './styles.scss';
import profileImg from '../../assets/sample_profile.jpg';

export default function Admin() {
    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    {/* <p>Wednesday, 24 June</p> */}
                    <h2>Admin Dashboard</h2>
                </div>
                <Button label="Add New Batch" icon={<FaPlus />} />
            </div>
            <div className="admin-dashboard">
                <Programmes />
                <div className="teachers">
                    {[...Array(10)].map(c => (
                        <div className="teacher" key={c}>
                            <div className="details">
                                <img src={profileImg} alt="name" />
                                <div>
                                    <p className="name">Dr. Preti Kularni</p>
                                    <p className="email">preti.kulkarni@sicsr.ac.in</p>
                                </div>
                            </div>
                            <Button label="Remove" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}