import { motion } from "framer-motion";

type BackdropProps = {
    children: React.ReactNode
}

export default function Backdrop({ children }: BackdropProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 h-full w-full bg-black/40 flex items-center justify-center z-50">
            <div className="bg-slate-100 shadow-lg rounded-lg w-2/3">
                {children}
            </div>
        </motion.div>
    )
}