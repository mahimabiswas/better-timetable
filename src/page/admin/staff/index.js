import Button from "shared/button";
import '../styles.scss';
import StaffList from "./list";
import TextField from "shared/textfield";
import './styles.scss';
import Radio from "shared/radio";

export default function Staff() {
    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    <h2>Manage Staffs</h2>
                </div>
            </div>
            <div className="admin-dashboard">
                <div className="add_staff">
                    <TextField title="Enter staff's Name" name="name" type='text' />
                    <TextField title="Enter staff's email ID" name="email" type='email' styles={{ margin: '18px 0' }} />
                    <Radio name="role" title="Choose the staff's role" options={[
                        { label: 'admin', value: '1' },
                        { label: 'teacher', value: '1' },
                        { label: 'viewer', value: '1' },
                    ]} defaultSelected={2} />
                    <br />
                    <Button size="medium" styles={{ marginTop: "24px" }} label="Add Staff" />

                </div>

                <StaffList showAddNew={false} />
            </div>
        </main>
    )
}