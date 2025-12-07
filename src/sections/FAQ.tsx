import { useState } from 'react';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from '../components/Badge';

function FAQ() {
  const questions = [
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
      question: "What if I'm not sure what I need?",
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

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFaq(id);
    }
  };

  return (
    <section 
      id="faq"
      className='flex flex-col gap-10 p-8'
      aria-labelledby="faq-heading"
    >
      <Badge label='Frequently Asked Questions' />
      
      <div 
        className='flex flex-col gap-4 w-full max-w-3xl mx-auto'
        role="region"
        aria-label="Frequently asked questions list"
      >
        <h2 id="faq-heading" className="sr-only">
          Frequently Asked Questions
        </h2>

        {questions.map((question) => (
          <div
            key={question.id}
            className='flex flex-col border-b-2 bg-sectionBg rounded-t-md hover:border hover:border-primaryColor transition-all ease-in-out duration-300'
          >
            <button
              className='flex items-start justify-between cursor-pointer w-full text-left'
              onClick={() => toggleFaq(question.id)}
              onKeyDown={(e) => handleKeyDown(e, question.id)}
              aria-expanded={openId === question.id}
              aria-controls={`faq-answer-${question.id}`}
              id={`faq-question-${question.id}`}
            >
              <div className="p-4 flex-1">
                <span className="font-semibold">
                  {`${question.id}. ${question.question}`}
                </span>
              </div>

              <span 
                className="p-4"
                aria-hidden="true"
              >
                <FontAwesomeIcon 
                  icon={openId === question.id ? faXmark : faPlus}
                  className='font-bold text-blue-600'
                  size='lg'
                />
              </span>
            </button>

            {openId === question.id && (
              <div
                id={`faq-answer-${question.id}`}
                role="region"
                aria-labelledby={`faq-question-${question.id}`}
                className="px-4 pb-4"
              >
                <p className='text-textWeak'>
                  {question.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;