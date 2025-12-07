import type { CardProps } from '../../types/Types';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineRobot } from "react-icons/ai"

function Services(){
    // List of services
    const services: CardProps[] = [
        {
            icon: faCog,
            title: 'Process Automation',
            content: 'Manual tasks slow teams and cause errors. Runwise automates workflows and approvals, freeing your team to focus on growth.',
            ariaLabel: 'Process Automation service'
        },

        {
            icon: AiOutlineRobot,
            title: 'AI Agents',
            content: 'Repetitive tasks waste time. Runwise AI handles routine responses and reminders, letting your team scale efficiently.',
            ariaLabel: 'AI Agents service'
        },
    ]
    
    return(
        <section 
            id="services"
            className='flex flex-col py-10 gap-12 pageSection'
            aria-labelledby="services-heading"
        >
            <Badge 
                label='What We Offer'
            />
            <h2 id="services-heading" className='text-center'>
                Our Core Services
            </h2>

            <div 
                className='flex flex-col md:flex-row gap-6 mx-auto items-stretch'
                role="list"
                aria-label="Available services"
            >
                {
                    services.map((service, index) => (
                        <div key={index} role="listitem" className='flex-1 flex'>
                            <Card 
                                icon={service.icon}
                                title={service.title}
                                content={service.content}
                                aria-label={service.ariaLabel}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services;