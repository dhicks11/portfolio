"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LaunchBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative z-50 overflow-hidden bg-accent text-white text-center text-sm font-medium"
        >
          <div className="flex items-center justify-center gap-3 px-4 py-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>
              Just launched my portfolio — look around and{" "}
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity"
              >
                let me know what you think
              </button>
            </span>
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss banner"
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
