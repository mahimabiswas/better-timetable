import { Link, useRouteMatch } from "react-router-dom";
import { BsPeopleFill } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdClass } from 'react-icons/md';
import data from 'data/program.json';

export default function Programmes() {
    let { url } = useRouteMatch()
    return (
        <div className="programmes">
            {Object.keys(data).map(prog => (
                <Link to={`${url}/${prog}`}>
                    <div className="program" key={prog}>
                        <h3>{data[prog].label}</h3>
                        <p className="desc">{data[prog].desc}</p>
                        <div className="stats">
                            <div className="stat"><BsPeopleFill /> <p><b>{data[prog].batches}</b> batches</p></div>
                            <div className="stat"><FaChalkboardTeacher /><p><b>{data[prog].teachers}</b> teachers allocated</p></div>
                            <div className="stat"><MdClass /> <p><b>{data[prog].courses}</b> courses</p></div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}