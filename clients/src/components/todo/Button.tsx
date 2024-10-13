import { motion } from "framer-motion"

type ButtonProps = {
    text: string
    maxWidth?: string
    onClick?: () => void
    hoverExpand?: boolean
    type?: "button" | "submit" | "reset"
}

export default function ButtonComponent(
    { text, onClick, hoverExpand, maxWidth = "max-w-24", type = 'button' }: ButtonProps) {

    return (
        <motion.button
            whileHover={hoverExpand ? { scale: 1.1 } : {}}
            whileTap={hoverExpand ? { scale: 0.9 } : {}}
            onClick={onClick}
            type={type}
            className={`bg-gradient-to-r from-pink-400 to-blue-500 text-white p-2 rounded ${maxWidth} mx-auto hover:from-pink-500 hover:to-blue-600 hover:text-gray-100 hover:shadow-md transition duration-400 ease-in-out grow`} >
            {text}
        </motion.button>
    )
}