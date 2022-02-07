import { useParams } from 'react-router-dom';


export default function Program() {
    let { program } = useParams();
    return (
        <>
            {program}
        </>
    )
}