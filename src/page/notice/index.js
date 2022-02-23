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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Hoc Hieronymus summum bonum esse dixit. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. Duo Reges: constructio interrete. <a href="http://loripsum.net/" target="_blank">Ille incendat?</a> <b>Et quidem, inquit, vehementer errat;</b> Quam illa ardentis amores excitaret sui! Cur tandem? </p>

                    <pre>Huic Epicurus praecentet, si potest, cui e viperino morsu
                        venae viscerum Veneno inbutae taetros cruciatus cient! Sic
                        Epicurus: Philocteta, st! brevis dolor.

                        Totum autem id externum est, et quod externum, id in casu
                        est.
                    </pre>


                    <dl>
                        <dt><dfn>Ne discipulum abducam, times.</dfn></dt>
                        <dd>Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus.</dd>
                        <dt><dfn>Reguli reiciendam;</dfn></dt>
                        <dd>Hosne igitur laudas et hanc eorum, inquam, sententiam sequi nos censes oportere?</dd>
                        <dt><dfn>Sullae consulatum?</dfn></dt>
                        <dd>Nullis enim partitionibus, nullis definitionibus utuntur ipsique dicunt ea se modo probare, quibus natura tacita adsentiatur.</dd>
                        <dt><dfn>Non igitur bene.</dfn></dt>
                        <dd>Qualem igitur hominem natura inchoavit?</dd>
                    </dl>


                    <ul>
                        <li>Qua ex cognitione facilior facta est investigatio rerum occultissimarum.</li>
                        <li>Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit;</li>
                        <li>In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.</li>
                        <li>Illo enim addito iuste fit recte factum, per se autem hoc ipsum reddere in officio ponitur.</li>
                        <li>Non modo carum sibi quemque, verum etiam vehementer carum esse?</li>
                        <li>Mihi, inquam, qui te id ipsum rogavi?</li>
                    </ul>


                    <blockquote cite="http://loripsum.net">
                        Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus.
                    </blockquote>


                    <p><code>Quod non faceret, si in voluptate summum bonum poneret.</code> Utram tandem linguam nescio? <a href="http://loripsum.net/" target="_blank">Si longus, levis dictata sunt.</a> Cum audissem Antiochum, Brute, ut solebam, cum M. Positum est a nostris in iis esse rebus, quae secundum naturam essent, non dolere; <a href="http://loripsum.net/" target="_blank">Nunc omni virtuti vitium contrario nomine opponitur.</a> </p>

                    <ol>
                        <li>Quodsi ipsam honestatem undique pertectam atque absolutam.</li>
                        <li>Quid de Platone aut de Democrito loquar?</li>
                        <li>Sed ille, ut dixi, vitiose.</li>
                        <li>Nunc de hominis summo bono quaeritur;</li>
                    </ol>


                    <p>Tu autem, si tibi illa probabantur, cur non propriis verbis ea tenebas? <mark>Mihi, inquam, qui te id ipsum rogavi?</mark> Quamquam ex omnibus philosophis Stoici plurima novaverunt, Zenoque, eorum princeps, non tam rerum inventor fuit quam verborum novorum. Atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est. Nunc omni virtuti vitium contrario nomine opponitur. An me, inquam, nisi te audire vellem, censes haec dicturum fuisse? </p>


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