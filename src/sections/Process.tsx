import type { ProcessCardProps } from '../../types/Types';
import Badge from '../components/Badge';
import ProcessCard from '../components/ProcessCard';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const processCards: ProcessCardProps[] = [
    {
      id: 1,
      title: 'Get started',
      steps: [
        'Fill out a simple form',
        'We send you automation suggestions based on your enquiry',
        'We contact you to book a call at a time that works'
      ]
    },
    {
      id: 2,
      title: 'Discover Your Needs',
      steps: [
        'We talk through your challenges',
        'Decide together what tools and automations will help',
        'Agree on what success looks like'
      ]
    },
    {
      id: 3,
      title: 'Build & Show',
      steps: [
        'We create the automation for you',
        'Share a demo so you can see it in action',
        'Make any changes you need',
        'Fully set it up for you'
      ]
    },
    {
      id: 4,
      title: 'Go Live & Support',
      steps: [
        'Complete payment',
        'Ongoing help to keep things running smoothly',
        'Updates whenever needed'
      ]
    }
  ];

  return (
    <section 
      ref={ref}
      id="process"
      className='flex flex-col gap-10 md:gap-20 py-10 pageSection'
      aria-labelledby="process-heading"
    >
      <Badge label='How It Works' />
      <h2 id="process-heading" className='text-center'>
        How It Works
      </h2>
      
      <div 
        className='flex flex-col gap-20 relative'
        role="list"
        aria-label="Process steps"
      >
        <motion.div
          className='bg-borderColor w-2 h-full absolute left-1/2 rounded-full origin-top'
          style={{ scaleY: scrollYProgress }}
          aria-hidden="true"
          role="presentation"
        />
        
        {processCards.map((processCard, index) => (
          <div
            key={processCard.id}
            className={`w-fit ${index % 2 !== 0 ? 'ml-auto' : 'mr-auto'}`}
            role="listitem"
          >
            <ProcessCard 
              id={processCard.id}
              title={processCard.title}
              steps={processCard.steps}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;