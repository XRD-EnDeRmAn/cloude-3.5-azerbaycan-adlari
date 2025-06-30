import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900">
    <motion.img
      src={logo}
      alt="Logo"
      className="w-24 h-24 mb-4"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
    />
    <motion.div
      className="w-8 h-8 border-4 border-dotted border-blue-400 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
    />
    <div className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200">Yüklənir...</div>
  </div>
);