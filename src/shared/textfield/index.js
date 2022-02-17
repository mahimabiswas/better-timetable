import './styles.scss';

export default function TextField({ title, type, placeholder = "", name, styles = {} }) {
    return (
        <div className="text_field" style={styles}>
            <label htmlFor={name}>{title}</label>
            <input name={name} id={name} type={type} placeholder={placeholder} />
        </div>
    )

}