import { useEffect, useState } from 'react';
import Button from 'shared/button';
import { FaPlus } from 'react-icons/fa';
import './styles.scss';
import AddSubject from './addSubject';
import axios from 'axios';
export default function SubjectList({ programId }) {
    const [openAddSubject, setOpenAddSubject] = useState(false);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios.get('/subject/get/?programId=' + programId).then(response => {
            setSubjects(response.data.subjects);
        })
    },[programId])
    return (
        <>
            <section className="right">
                <div className="section_header">
                    <h3 className="section_title">Subjects</h3>
                    <Button label="Add New Subject" icon={<FaPlus />} onClick={() => { setOpenAddSubject(true) }} />
                </div>
                <div className="subjects">
                    {subjects.length && subjects.map(subject => (
                        <div className="subject" key={subject._id}>
                            <div className="details">
                                <div>
                                    <p className="name">{subject.shortName}</p>
                                    <p className="desc">{subject.longName}</p>
                                </div>
                            </div>
                            <p className={`type ${subject.type === 0 ? 'core' : 'elective'}`} >{subject.type === 0 ? 'core' : 'elective'}</p>
                            <div className="show_on_hov">
                                <Button label="remove" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <AddSubject open={openAddSubject} setOpen={setOpenAddSubject} programId={programId} />
        </>
    )
}