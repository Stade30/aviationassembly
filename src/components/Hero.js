import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/hero-bg.jpg)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-80 p-10 rounded shadow-lg text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to ChurchName</h1>
        <p className="text-gray-700">
          Join us every Sunday for worship and fellowship.
        </p>
      </motion.div>
    </section>
  );
}
