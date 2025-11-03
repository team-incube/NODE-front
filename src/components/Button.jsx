function Button({ className, children, selected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`${className} font-tmoney font-extrabold text-white rounded-2xl ${selected ? "bg-[#95C4F5]" : "bg-[#D9D9D9]"
                }`}>
            {children}
        </button>
    )
}

export default Button;