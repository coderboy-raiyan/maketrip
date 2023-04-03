function FormInput({ onBlur, onChange, type, value, placeholder, name, styles }) {
    return (
        <input
            className={`rounded-lg border-[#EAEAEA] py-3 text-[15px] placeholder:text-[14px] placeholder:text-[#B8B9BF] focus:outline-none focus:ring-0 ${styles}`}
            onChange={onChange}
            onBlur={onBlur}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
        />
    );
}

export default FormInput;
