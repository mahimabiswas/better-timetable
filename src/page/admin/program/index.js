import { useParams, Link, useRouteMatch } from 'react-router-dom';
import Button from 'shared/button';
import { FaPlus } from 'react-icons/fa';
import data from 'data/program.json';
import { BsPeopleFill } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdClass } from 'react-icons/md';
import './styles.scss';
import SubjectList from './subject';

export default function Program() {
    let { program } = useParams();
    let { url } = useRouteMatch();

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
                            <div className="stat"><BsPeopleFill /> <p><b>{3}</b> semesters</p></div>
                            <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                            <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                        </div>
                    </div>
                    <div className='batches'>
                        <Link to={`${url}/sem1`}>
                            <div className='batch'>
                                <h3>Sem 1</h3>
                                <div className='stats'>
                                    <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                    <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                                </div>
                            </div>
                        </Link>
                        <div className='batch'>
                            <h3>Sem 2</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                        <div className='batch'>
                            <h3>Sem 3</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                        <div className='batch'>
                            <h3>Sem 4</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                        <div className='batch'>
                            <h3>Sem 5</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                        <div className='batch'>
                            <h3>Sem 6</h3>
                            <div className='stats'>
                                <div className="stat"><MdClass /> <p><b>{12}</b> classes</p></div>
                                <div className="stat"><FaChalkboardTeacher /> <p><b>{21}</b> teachers</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='courses'>
                    <SubjectList />
                    {/* {[...Array(23)].map(() => (
                        <div className='course'>
                            <span><AiOutlineDelete /></span>
                            <i><MdClass /></i>
                            <h3>SSWT</h3>
                        </div>
                    ))} */}
                </div>
            </div>
        </main>
    )
} 