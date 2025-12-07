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
            title:'Get started',
            steps:[
                'Fill out a simple form',
                'We send you automation suggestions based on your enquiry',
                'We contact you to book a call at a time that works'
            ]
        },
        {
            id: 2,
            title:'Discover Your Needs',
            steps:[
                'We talk through your challenges',
                'Decide together what tools and automations will help',
                'Agree on what success looks like'
            ]
        },
        {
            id: 3,
            title:'Build & Show',
            steps:[
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
    <section ref={ref} className='flex flex-col gap-10 md:gap-20 py-10 pageSection'>
      <Badge label='How It Works' />
      <h3 className='text-center'>How It Works</h3>
      
      <section className='flex flex-col gap-20 relative'>
        <motion.div
          className='bg-borderColor w-2 h-full absolute left-1/2 hidden slg:block rounded-full origin-top'
          style={{ scaleY: scrollYProgress }}
        />
        
        {processCards.map((processCard, key) => (
          <div
            key={key}
            className={`w-fit ${key % 2 !== 0 ? 'ml-auto' : 'mr-auto'}`}
          >
            <ProcessCard 
              id={processCard.id}
              title={processCard.title}
              steps={processCard.steps}
            />
          </div>
        ))}
      </section>
    </section>
  );
}

export default Process;