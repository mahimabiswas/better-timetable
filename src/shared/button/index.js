import './styles.scss';

export default function Button({ label, onClick = () => { }, icon = null, disabled = false }) {
    return (
        <button onClick={onClick} disabled={disabled}>{label}
            {icon &&
                <span>
                    {icon}
                </span>
            }
        </button>
    )
}