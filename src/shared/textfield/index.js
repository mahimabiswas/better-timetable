import './styles.scss';

export default function TextField({ title, type, placeholder = "", name, styles = {}, value = '', onChange = () => { } }) {
    return (
        <div className="text_field" style={styles}>
            <label htmlFor={name}>{title}</label>
            <input value={value} name={name} id={name} type={type} placeholder={placeholder} onChange={e => onChange(e)} />
        </div>
    )

}