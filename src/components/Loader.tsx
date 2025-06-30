import { motion } from "framer-motion";
export default function Loader() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900">
      <motion.img
        src="/logo.svg"
        className="w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        alt="Logo"
      />
      <div className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
        Yüklənir...
      </div>
    </div>
  );
}