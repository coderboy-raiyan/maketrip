function FormInput({ onChange, type, placeholder, name }) {
    return <input onChange={onChange} type={type} placeholder={placeholder} name={name} />;
}

export default FormInput;
