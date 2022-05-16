import './Utils.css';
function Input({ name, type, placeholder, value, handle }) {
    return (<input style={{ width: '100%', padding: '0.5rem 1rem' }}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => { handle(e.target.value) }} />);
}

export default Input;