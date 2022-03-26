import { useParams } from 'react-router-dom';
import Button from 'shared/button';
import { FaPlus } from 'react-icons/fa';
import data from 'data/program.json';
import { BsPeopleFill } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdClass } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import './styles.scss';

export default function Program() {
    let { program } = useParams();
    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    <h2>{data[program].label}</h2>
                    <p>{data[program].desc}</p>
                </div>
                <div className="actions">
                    <Button label="Add New Batch" icon={<FaPlus />} />
                </div>
            </div>
            <div className='program-dashboard'>
                <div className='program'>
                    <div className='program-details'>
                        <div className='stats'>
                            <div className="stat"><BsPeopleFill /> <p><b>{3}</b> batches</p></div>
                            <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                            <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                        </div>
                    </div>
                    <div className='batches'>
                        <div className='batch'>
                            <h3>Div A</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                        <div className='batch'>
                            <h3>Div B</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                        <div className='batch'>
                            <h3>Div C</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                        <div className='batch'>
                            <h3>Div D</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='courses'>
                    {[...Array(23)].map(() => (
                        <div className='course'>
                            <span><AiOutlineDelete /></span>
                            <i><MdClass /></i>
                            <h3>SSWT</h3>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
} 