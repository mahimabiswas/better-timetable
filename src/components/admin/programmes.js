import { BsPeopleFill } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdClass } from 'react-icons/md';

const data = {
    bca: {
        label: 'BCA',
        desc: 'Bachelor of Computer Application',
        batches: 3,
        teachers: 12,
        courses: 21
    },
    "bba-it": {
        label: 'BBA (IT)',
        desc: 'Bachelor of Business Administration - Information Technology',
        batches: 6,
        teachers: 18,
        courses: 36
    },
    "msc-ca": {
        label: 'MSC (CA)',
        desc: 'Master of Science - Computer Application',
        batches: 8,
        teachers: 22,
        courses: 28
    }
};

export default function Programmes() {
    return (
        <div className="programmes">
            {Object.keys(data).map(prog => (
                <div className="program" key={prog}>
                    <h3>{data[prog].label}</h3>
                    <p className="desc">{data[prog].desc}</p>
                    <div className="stats">
                        <div className="stat"><BsPeopleFill /> <p><b>{data[prog].batches}</b> batches</p></div>
                        <div className="stat"><FaChalkboardTeacher /><p><b>{data[prog].teachers}</b> teachers allocated</p></div>
                        <div className="stat"><MdClass /> <p><b>{data[prog].courses}</b> courses</p></div>
                    </div>
                </div>
            ))}
        </div>
    )
}