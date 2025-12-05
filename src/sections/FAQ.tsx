import Badge from '../components/Badge';
import type { Question } from '../../types/Types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FAQ(){
    const questions: Question[] = [
        {
            id: 1,
            question: 'What exactly does Runwise do?',
            answer: 'Runwise automates workflows and approvals so your team can focus on growth.'
        },
        {
            id: 2,
            question: 'Do I need to know anything technical?',
            answer: 'No, Runwise is simple to use and requires no technical skills.'
        },
        {
            id: 3,
            question: 'How long does it take to build an automation?',
            answer: 'Most automations are set up quickly, often within days.'
        },
        {
            id: 4,
            question: 'What if I’m not sure what I need?',
            answer: 'We guide you through options and help design the right solution.'
        },
        {
            id: 5,
            question: 'What tools do you work with?',
            answer: 'Runwise connects with popular business tools to fit your workflow.'
        },
        {
            id: 6,
            question: 'Do you offer ongoing support?',
            answer: 'Yes, we provide continuous support to keep your automations running smoothly.'
        },
        {
            id: 7,
            question: 'What if I want changes later?',
            answer: 'Automations can be adjusted anytime as your needs evolve.'
        },
        {
            id: 8,
            question: 'How much does it cost?',
            answer: 'Pricing is flexible and depends on your business needs.'
        },
        {
            id: 9,
            question: 'What businesses is Runwise best for?',
            answer: 'Runwise works well for teams of all sizes across industries.'
        },
    ];

    return (
        <section className='pageSection'>
            <Badge 
                label='Fequently Asked Questions'
            />
            
            <article className='flex flex-col gap-4'>
                {
                    questions.map(question => (
                        <div className='flex items-center border-b-2 bg-sectionBg rounded-t-md px-2 justify-between'>
                            <details className="p-4 flex flex-col gap-4">
                                <summary className="cursor-pointer font-semibold text-primary list-none">
                                    {`${question.id}. ${question.question}`}
                                </summary>
                                <p className='text-textWeak'>
                                    {question.answer}
                                </p>
                            </details>

                            <FontAwesomeIcon 
                                icon={faPlus}
                                className='font-bold text-primaryColor'
                                size='lg'
                            />
                        </div>
                    ))
                }
            </article>


        </section>
    )
}

export default FAQ;