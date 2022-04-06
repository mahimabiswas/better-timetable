import { useState } from 'react';
import Button from 'shared/button';
import { FaPlus } from 'react-icons/fa';
// import { useHistory } from 'react-router-dom';
import './styles.scss';
import AddSubject from './addSubject';
export default function SubjectList() {
    // const history = useHistory();
    const [openAddSubject, setOpenAddSubject] = useState(false);

    return (
        <>
            <section className="right">
                <div className="section_header">
                    <h3 className="section_title">Subjects</h3>
                    {/* {showAddNew && */}
                    <Button label="Add New Subject" icon={<FaPlus />} onClick={() => { setOpenAddSubject(true) }} />
                    {/* } */}
                </div>
                <div className="subjects">
                    {[...Array(20)].map(c => (
                        <div className="subject" key={c}>
                            <div className="details">
                                <div>
                                    <p className="name">SSWT</p>
                                    <p className="desc">Server Side Web Technology</p>
                                </div>
                            </div>
                            <p className={`type elective`} >elective</p>
                            <div className="show_on_hov">
                                <Button label="remove" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <AddSubject open={openAddSubject} setOpen={setOpenAddSubject} />
        </>
    )
}