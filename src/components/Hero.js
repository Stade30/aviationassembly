import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen bg-hero-bg bg-cover bg-center flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-80 p-10 rounded shadow-lg text-center"
      >
        <h1 className="text-4xl font-heading mb-4">
          Welcome to Aviation Assembly - ICGC
        </h1>
        <p className="text-gray-700 font-optfont mb-6">
          Join us every Sunday for worship and fellowship in Love, Faith and
          Hope.
        </p>
        <blockquote className="font-scripture italic text-lg">
          “For where two or three gather in my name, there am I with them.” —
          Matthew 18:20
        </blockquote>
      </motion.div>
    </section>
  );
}
