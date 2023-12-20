type ButtonProp = {
    name: React.ReactNode
    onCLick: any
    disabled?: boolean
    style?: "primary" | "navy" | "blue" | "red" | "green" | "purple" | "yellow" | "orange"
}

const buttonStyle = {
    "primary": "rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200",
    "navy": "rounded-xl bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30",
    "blue": "rounded-xl bg-blue-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200",
    "red": "rounded-xl bg-red-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200",
    "green": "rounded-xl bg-green-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-200",
    "purple": "rounded-xl bg-purple-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white dark:hover:bg-purple-300 dark:active:bg-purple-200",
    "yellow": "rounded-xl bg-yellow-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200",
    "orange": "rounded-xl bg-orange-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-300 dark:active:bg-orange-200",
}

const Button = ({ name, onCLick, disabled, style = "primary" }: ButtonProp) => {
    return (
        <>
            <button onClick={onCLick} disabled={disabled} className={`${buttonStyle[style]} ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
                {name}
            </button>
        </>
    )
}

export default Button