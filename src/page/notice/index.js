import { useState } from "react";
import Button from "shared/button";
import { FaPlus } from 'react-icons/fa';
import './styles.scss';
import profileImg from 'assets/sample_profile.jpg';
import { AiOutlinePushpin, AiFillPushpin } from 'react-icons/ai'

function Notice({ key }) {
    // console.log(key)
    const [pinned, setPinned] = useState(false);
    return (
        <div className="notice" key={key}>
            <span className="pin" onClick={() => setPinned(!pinned)}>{pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}</span>
            <div className="author">
                <img src={profileImg} alt="hi" />
                <div className="details">
                    <p className="name">Nisha</p>
                    <p className="time">2 days ago</p>
                </div>
            </div>
            <div className="data">
                <h1>In publishing and producing graphic design</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Hoc Hieronymus summum bonum esse dixit. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. Duo Reges: constructio interrete. <a href="http://loripsum.net/">Ille incendat?</a> <b>Et quidem, inquit, vehementer errat;</b> Quam illa ardentis amores excitaret sui! Cur tandem? </p>
                <p>Tu autem, si tibi illa probabantur, cur non propriis verbis ea tenebas? <mark>Mihi, inquam, qui te id ipsum rogavi?</mark> Quamquam ex omnibus philosophis Stoici plurima novaverunt, Zenoque, eorum princeps, non tam rerum inventor fuit quam verborum novorum. Atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est. Nunc omni virtuti vitium contrario nomine opponitur. An me, inquam, nisi te audire vellem, censes haec dicturum fuisse? </p>
            </div>
        </div>
    )
}
export default function Board() {
    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    {/* <p>Wednesday, 24 June</p> */}
                    <h2>Notice Board</h2>
                </div>
                <Button label="Create" icon={<FaPlus />} />
            </div>
            <div className="board">
                <div className="notices">
                    {[...Array(4)].map(i => (
                        <Notice key={i} />
                    ))}
                </div>
            </div>
        </main>
    )
}