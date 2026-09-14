"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

type MotionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function MotionReveal({
  delay = 0,
  children,
  ...props
}: MotionRevealProps) {
  return (
    <motion.div
      {...props}
      data-motion-reveal="true"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerProps = HTMLMotionProps<"div">;

export function MotionStagger({ children, ...props }: MotionStaggerProps) {
  return (
    <motion.div
      {...props}
      data-motion-stagger="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerList({
  children,
  ...props
}: HTMLMotionProps<"ul">) {
  return (
    <motion.ul
      {...props}
      data-motion-stagger="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.ul>
  );
}

export function MotionStaggerItem({ children, ...props }: MotionStaggerProps) {
  return (
    <motion.div
      {...props}
      data-motion-stagger-item="true"
      variants={itemVariants}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerListItem({
  children,
  ...props
}: HTMLMotionProps<"li">) {
  return (
    <motion.li
      {...props}
      data-motion-stagger-item="true"
      variants={itemVariants}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.li>
  );
}
