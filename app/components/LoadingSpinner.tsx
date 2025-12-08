"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <motion.div
      className="flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
    >
      <Loader2 className="w-6 h-6 text-[var(--secondary)]" />
    </motion.div>
  );
}