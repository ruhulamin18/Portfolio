import React from 'react';
import { motion } from 'framer-motion';

const variantStyles = {
  hero: {
    glow:
      'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.13),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.10),transparent_30%)]',
    grid: 'left-[52%] top-[50%] h-[760px] w-[760px]',
  },
  about: {
    glow:
      'bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.13),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.09),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.09),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.07),transparent_30%)]',
    grid: 'left-[42%] top-[52%] h-[680px] w-[680px]',
  },
  skills: {
    glow:
      'bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.13),transparent_34%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.07),transparent_30%)]',
    grid: 'left-[55%] top-[54%] h-[700px] w-[700px]',
  },
  experience: {
    glow:
      'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.08),transparent_30%)]',
    grid: 'left-[48%] top-[50%] h-[720px] w-[720px]',
  },
  projects: {
    glow:
      'bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_32%)]',
    grid: 'left-[50%] top-[48%] h-[740px] w-[740px]',
  },
  certificates: {
    glow:
      'bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.13),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.09),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.07),transparent_32%)]',
    grid: 'left-[50%] top-[50%] h-[700px] w-[700px]',
  },
  contact: {
    glow:
      'bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.09),transparent_30%)] dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.06),transparent_30%)]',
    grid: 'left-[50%] top-[52%] h-[680px] w-[680px]',
  },
};

const floatingShapes = [
  {
    className:
      'left-[5%] top-[14%] h-20 w-20 border-cyan-300/45 dark:border-cyan-300/25',
    animate: {
      x: [0, 18, -8, 0],
      y: [0, -24, 12, 0],
      rotateX: [18, 52, 24, 18],
      rotateY: [-28, 18, -42, -28],
      rotateZ: [0, 8, -5, 0],
    },
    duration: 13,
  },
  {
    className:
      'right-[7%] top-[18%] h-16 w-16 border-emerald-300/45 dark:border-emerald-300/25',
    animate: {
      x: [0, -20, 8, 0],
      y: [0, 22, -10, 0],
      rotateX: [42, 10, 56, 42],
      rotateY: [22, -36, 12, 22],
      rotateZ: [10, -6, 8, 10],
    },
    duration: 15,
  },
  {
    className:
      'bottom-[14%] left-[12%] h-14 w-14 border-blue-300/40 dark:border-blue-300/25',
    animate: {
      x: [0, 14, -16, 0],
      y: [0, 18, -18, 0],
      rotateX: [8, 46, 18, 8],
      rotateY: [38, -8, 50, 38],
      rotateZ: [-8, 7, -12, -8],
    },
    duration: 12,
  },
  {
    className:
      'bottom-[10%] right-[13%] h-24 w-24 border-cyan-200/35 dark:border-cyan-200/20',
    animate: {
      x: [0, -16, 16, 0],
      y: [0, -16, 18, 0],
      rotateX: [58, 18, 42, 58],
      rotateY: [-16, 34, -8, -16],
      rotateZ: [6, -10, 5, 6],
    },
    duration: 16,
  },
];

const PortfolioBackground = ({ variant = 'hero' }) => {
  const styles = variantStyles[variant] ?? variantStyles.hero;

  return (
    <>
      <div className={`absolute inset-0 pointer-events-none ${styles.glow}`} />

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ perspective: '900px' }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ rotateX: [62, 68, 62], rotateZ: [0, 2.5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-[linear-gradient(90deg,rgba(6,182,212,0.14)_1px,transparent_1px),linear-gradient(0deg,rgba(16,185,129,0.12)_1px,transparent_1px)] bg-[length:42px_42px] shadow-[0_28px_90px_rgba(8,145,178,0.12)] dark:border-cyan-300/10 dark:shadow-[0_28px_90px_rgba(34,211,238,0.08)] ${styles.grid}`}
        />

        {floatingShapes.map((shape, index) => (
          <motion.div
            key={`${variant}-${shape.className}`}
            animate={shape.animate}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.7,
            }}
            className={`absolute rounded-lg border bg-white/35 shadow-[18px_22px_50px_rgba(8,145,178,0.16)] backdrop-blur-[2px] dark:bg-white/5 dark:shadow-[18px_22px_50px_rgba(0,0,0,0.22)] ${shape.className}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="absolute inset-3 rounded-md border border-white/50 dark:border-white/10" />
            <span className="absolute left-3 top-3 h-1.5 w-9 rounded-full bg-cyan-400/60 dark:bg-cyan-300/35" />
            <span className="absolute bottom-3 right-3 h-8 w-8 rounded-md bg-emerald-300/25 dark:bg-emerald-300/10" />
          </motion.div>
        ))}

        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[30%] top-[8%] h-24 w-40 skew-y-6 rounded-lg border border-blue-300/20 bg-gradient-to-br from-blue-400/10 to-cyan-300/10 blur-[0.2px] dark:border-blue-200/10"
        />
        <motion.div
          animate={{ y: [0, 16, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[8%] right-[34%] h-20 w-36 -skew-y-6 rounded-lg border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 to-cyan-300/10 blur-[0.2px] dark:border-emerald-200/10"
        />
      </div>
    </>
  );
};

export default PortfolioBackground;
