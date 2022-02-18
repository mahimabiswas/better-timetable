import React from 'react';
import './styles.scss';

function RadioBtn({ index, name = "", label = "", value = "", onChange, checked = false }) {
    console.log(checked)
    return (
        <div className="radioBtn">
            <input
                type="radio"
                name={name}
                id={name + label}
                onChange={() => onChange(index)}
                value={value}
                defaultChecked={checked} />
            <label htmlFor={name + label}>{label}</label>
        </div>
    );
}

export default function Radio({ name, options, onChange = () => { }, defaultSelected = null }) {
    return (
        <div className={"radioOptions"}>
            {options.map((option, i) => (
                <RadioBtn
                    label={option.label}
                    value={option.value}
                    name={name}
                    index={i}
                    checked={i === defaultSelected}
                    onChange={onChange}
                />
            )
            )}
        </div>
    );
}