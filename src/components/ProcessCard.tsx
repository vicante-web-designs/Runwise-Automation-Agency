import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import type { ProcessCardProps } from '../../types/Types';

function ProcessCard({ id, title, steps }: ProcessCardProps) {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start center', 'end center'], // Triggers when card start reaches viewport center
  });

  // Binary transformation - either 0 or 1, no in-between
  const isActive: MotionValue<number> = useTransform(scrollYProgress, (value) => value > 0 ? 1 : 0);
  
  const backgroundColor = useTransform(
    isActive,
    [0, 1],
    ['rgba(102,123,163,0.2)', '#F6F6F6']
  );
  
  const borderColor = useTransform(
    isActive,
    [0, 1],
    ['rgba(0,0,0,0)', 'rgba(59,130,246,1)']
  );

  const titleColor = useTransform(
    isActive,
    [0, 1],
    ['rgba(255,255,255,1)', '#00040D']
  );

  const badgeColor = useTransform(
    isActive,
    [0, 1],
    ['rgba(0,35,102,0.4)', 'rgba(0,35,102,0.9)']
  );

  const textColor = useTransform(
    isActive,
    [0, 1],
    ['rgba(209,213,219,1)', 'rgba(30,58,138,1)']
  );

  return (
    <motion.article
      ref={cardRef}
      style={{ backgroundColor, borderColor }}
      transition={{ duration: 0.3 }}
      className='flex flex-col p-6 gap-6 rounded-xl w-fit mx-auto items-center relative border-2'
    >
      <motion.span
        style={{ backgroundColor: badgeColor }}
        transition={{ duration: 0.3 }}
        className='w-14 h-14 rounded-full border border-textStrong flex items-center justify-center text-2xl font-bold absolute -top-7 text-white'
      >
        {id}
      </motion.span>

      <motion.h4 
        style={{ color: titleColor }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h4>

      <article className='flex flex-col gap-4'>
        {steps.map((step, key) => (
          <motion.div
            key={key}
            className='flex gap-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: key * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div 
              className='w-4 h-4 rounded-full mt-1 shrink-0 bg-blue-500'
            />
            <motion.p 
              style={{ color: textColor }}
              transition={{ duration: 0.3 }}
              className='max-w-[250px]'
            >
              {step}
            </motion.p>
          </motion.div>
        ))}
      </article>
    </motion.article>
  );
}

export default ProcessCard;