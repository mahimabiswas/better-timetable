import axios from "axios";
import Button from "shared/button";
import { useUser } from '../../util/auth/useUser';

export default function Account() {
    const { removeUser } = useUser()
    const handleSignOut = () => {
        axios.get('./auth/signout').then(() => {
            removeUser();
            alert('signed out')
        }).catch(e => {
            alert(e.response.data)
        })
    }
    return (
        <main>
            Account
            <Button label={"Sign Out"} onClick={handleSignOut} />
            <ul>
                <li>photo</li>
                <li>name</li>
                <li>designation</li>
                <li>role</li>
                <li>contact number</li>
            </ul>
        </main>
    )
}