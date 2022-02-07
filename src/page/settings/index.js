import { useState } from 'react';
import Select from 'react-select';
import './styles.scss';
import { changeTheme, getTheme } from 'util/theme';

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
            theme
            <br />
            <Select options={options}
                value={options[theme === 'light' ? 1 : theme === 'dark' ? 0 : 2]} classNamePrefix='btt' className='btt-container' theme={(theme) => ({
                    ...theme,
                    borderRadius: "4px",
                    colors: {
                        ...theme.colors,
                        primary50: "var(--light-gray)",
                        primary25: "var(--gray)",
                        primary: "var(--gray)",
                        neutral80: "var(--gray)",
                    },
                })}
                onChange={(e) => {
                    setTheme(e.value);
                    changeTheme(e.value);
                }}
            />
            {/**
             * theme
             * default timetable
             * time type
             * notification
             * 
             * show clock
             * clock type  
             **/}
        </main>
    )
}