const Button = ({ label }: { label: string }) => {
    return (
        <button className="bg-blue-400 text-lg py-1 px-3 text-white rounded-[5px]">
            {label}
        </button>
    )
}

export default Button