import { useParams } from 'react-router-dom';
import Button from 'shared/button';
import { FaPlus } from 'react-icons/fa';
import data from 'data/program.json';

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
            <div className='batches'>
                <div className='batch'>
                    <h2>Div A</h2>
                </div>
            </div>
        </main>
    )
}