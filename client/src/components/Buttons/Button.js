/* eslint-disable react/button-has-type */
function Button({ children, type, className, onClick }) {
    return (
        <button
            style={{ background: "linear-gradient(90deg, #124d5f 0%, #3ca897 100%)" }}
            type={type}
            onClick={onClick}
            className={`${className} rounded-md px-7 py-4 text-white`}
        >
            {children}
        </button>
    );
}

export default Button;
