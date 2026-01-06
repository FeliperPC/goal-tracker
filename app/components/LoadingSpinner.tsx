"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function LoadingSpinner({ color }: { color?: string }) {
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
      <Loader2
        className="w-6 h-6"
        style={{ color: color ?? "var(--primary)" }}
      />
    </motion.div>
  );
}
