import Button from "shared/button";

export default function Account() {
    return (
        <main>
            Account
            <Button label={"Sign Out"} />
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