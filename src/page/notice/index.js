import { useState } from "react";
import Button from "shared/button";
import { FaPlus } from 'react-icons/fa';
import './styles.scss';
import profileImg from 'assets/sample_profile.jpg';
import { AiOutlinePushpin, AiFillPushpin } from 'react-icons/ai'

function Notice({ key }) {
    console.log(key)
    const [pinned, setPinned] = useState(false);
    return (
        <div className="notice" key={key}>
            <span className="pin" onClick={() => setPinned(!pinned)}>{pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}</span>
            <div className="author">
                <img src={profileImg} alt="hi" />
                <div className="details">
                    <p className="name">Mridula Chhetri</p>
                    <p className="time">2 days ago</p>
                </div>
            </div>
            <div className="data">
                <h1>In publishing and producing graphic design</h1>
                <p>
                    {[...Array(4)].map(i => (
                        <>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</>
                    ))}
                </p>
                <p>
                    {[...Array(2)].map(i => (
                        <>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</>
                    ))}
                </p>
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