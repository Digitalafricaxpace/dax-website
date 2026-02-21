"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export default function AppleImmersiveSection({
  title,
  description,
  image,
  dark = false,
}: {
  title: string;
  description: string;
  image: string;
  dark?: boolean;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 1, 1]);
  const y = useTransform(smoothProgress, [0, 1], [100, 0]);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col justify-center items-center text-center px-8 ${
        dark ? "bg-secondary text-white" : "bg-white text-secondary"
      }`}
    >
      <motion.h2
        style={{ opacity, y }}
        className="text-6xl md:text-7xl font-semibold mb-10"
      >
        {title}
      </motion.h2>

      <motion.p
        style={{ opacity, y }}
        className={`text-xl max-w-2xl mb-16 ${
          dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </motion.p>

      <motion.img
        src={image}
        alt={title}
        style={{ scale, opacity }}
        className="max-w-6xl w-full rounded-2xl shadow-2xl"
      />
    </section>
  );
}
