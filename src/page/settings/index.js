import { useState } from 'react';
import { changeTheme, getTheme } from 'util/theme';
import Select from 'shared/select';
import './styles.scss';
import Radio from 'shared/radio';

const options = [
    { value: 'dark', label: '🌙 Dark' },
    { value: 'light', label: '☀️ Light' },
    { value: 'system', label: '💻 System' },
];


export default function Settings() {
    const [theme, setTheme] = useState(getTheme());

    return (
        <main>
            <div className='top'>
                <div className='meta'>
                    <h2>Settings</h2>
                </div>
            </div>
            <div className='settings'>
                <div className='setting'>
                    <p>theme</p>
                    <Select options={options}
                        value={options[theme === 'light' ? 1 : theme === 'dark' ? 0 : 2]}
                        onChange={(e) => {
                            setTheme(e.value);
                            changeTheme(e.value);
                        }}
                    />
                </div>
                <div className='setting'>
                    <p>clock type</p>
                    <Select options={options}
                        value={options[theme === 'light' ? 1 : theme === 'dark' ? 0 : 2]}
                        onChange={(e) => {
                            setTheme(e.value);
                            changeTheme(e.value);
                        }}
                    />
                </div>
                <div className='setting'>
                    <p>notification</p>
                    <Radio options={options} name="noti" defaultSelected={2} onChange={(e) => { console.log(e) }} />

                </div>
                <div className='setting'>
                    <p>show clock</p>
                    <Select options={options}
                        value={options[theme === 'light' ? 1 : theme === 'dark' ? 0 : 2]}
                        onChange={(e) => {
                            setTheme(e.value);
                            changeTheme(e.value);
                        }}
                    />
                </div>
            </div>
            {/**
             * theme
             * default timetable
             * time type
             * notification
             * show clock
             * clock type  
             **/}
        </main>
    )
}