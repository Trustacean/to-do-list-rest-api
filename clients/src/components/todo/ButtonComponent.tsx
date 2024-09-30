
type ButtonProps = {
    text: string
    maxWidth?: string
    onClick: () => void
    hoverExpand?: boolean
}

export default function ButtonComponent(
    { text, onClick, hoverExpand, maxWidth = "max-w-24" }: ButtonProps) {

    return (
        <button className={`bg-gradient-to-r from-pink-400 to-blue-500 text-white p-2 rounded ${maxWidth}
            mx-auto hover:from-pink-500 hover:to-blue-600 hover:text-gray-100 hover:shadow-md transition duration-400 ease-in-out grow
            ${hoverExpand ? 'hover:scale-x-105' : ''}`}
            name="login" onClick={onClick}>{text}</button>
    )
}