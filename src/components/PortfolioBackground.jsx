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
      'left-[6%] top-[16%] h-16 w-16 border-cyan-300/30 dark:border-cyan-300/18',
    animate: {
      x: [0, 10, -6, 0],
      y: [0, -14, 8, 0],
      rotateX: [24, 42, 28, 24],
      rotateY: [-22, 12, -26, -22],
      rotateZ: [0, 4, -3, 0],
    },
    duration: 18,
  },
  {
    className:
      'right-[8%] top-[20%] h-14 w-14 border-emerald-300/28 dark:border-emerald-300/18',
    animate: {
      x: [0, -12, 6, 0],
      y: [0, 12, -8, 0],
      rotateX: [38, 18, 46, 38],
      rotateY: [18, -24, 10, 18],
      rotateZ: [6, -4, 5, 6],
    },
    duration: 20,
  },
  {
    className:
      'bottom-[16%] left-[12%] h-12 w-12 border-blue-300/25 dark:border-blue-300/16',
    animate: {
      x: [0, 8, -10, 0],
      y: [0, 10, -12, 0],
      rotateX: [14, 36, 20, 14],
      rotateY: [30, -6, 38, 30],
      rotateZ: [-5, 4, -7, -5],
    },
    duration: 17,
  },
  {
    className:
      'bottom-[12%] right-[14%] h-20 w-20 border-cyan-200/24 dark:border-cyan-200/14',
    animate: {
      x: [0, -10, 12, 0],
      y: [0, -10, 12, 0],
      rotateX: [52, 26, 40, 52],
      rotateY: [-12, 24, -6, -12],
      rotateZ: [4, -6, 3, 4],
    },
    duration: 22,
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
          animate={{ rotateX: [63, 66, 63], rotateZ: [0, 1.2, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15 bg-[linear-gradient(90deg,rgba(6,182,212,0.09)_1px,transparent_1px),linear-gradient(0deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[length:46px_46px] shadow-[0_28px_90px_rgba(8,145,178,0.10)] dark:border-cyan-300/10 dark:shadow-[0_28px_90px_rgba(34,211,238,0.06)] ${styles.grid}`}
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
            className={`absolute rounded-lg border bg-white/20 shadow-[18px_22px_50px_rgba(8,145,178,0.10)] backdrop-blur-[3px] dark:bg-white/5 dark:shadow-[18px_22px_50px_rgba(0,0,0,0.18)] ${shape.className}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="absolute inset-3 rounded-md border border-white/35 dark:border-white/10" />
            <span className="absolute left-3 top-3 h-1 w-8 rounded-full bg-cyan-400/45 dark:bg-cyan-300/25" />
            <span className="absolute bottom-3 right-3 h-6 w-6 rounded-md bg-emerald-300/20 dark:bg-emerald-300/10" />
          </motion.div>
        ))}

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[30%] top-[8%] h-20 w-36 skew-y-6 rounded-lg border border-blue-300/15 bg-gradient-to-br from-blue-400/10 to-cyan-300/10 blur-[0.2px] dark:border-blue-200/10"
        />
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[8%] right-[34%] h-16 w-32 -skew-y-6 rounded-lg border border-emerald-300/15 bg-gradient-to-br from-emerald-300/10 to-cyan-300/10 blur-[0.2px] dark:border-emerald-200/10"
        />
      </div>
    </>
  );
};

export default PortfolioBackground;
