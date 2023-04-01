/* eslint-disable react/button-has-type */
function Button({ children, type, className }) {
    return (
        <button
            style={{ background: "linear-gradient(90deg, #124d5f 0%, #3ca897 100%)" }}
            type={type}
            className={`${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
