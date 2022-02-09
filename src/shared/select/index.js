import Select2 from 'react-select';
import './styles.scss';

export default function Select({ options, value, onChange }) {
    return (
        <Select2 options={options}
            value={value} classNamePrefix='btt' className='btt-container' theme={(theme) => ({
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
            onChange={(e) => onChange(e)}
        />
    )
}