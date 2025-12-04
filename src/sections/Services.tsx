import type { CardProps } from '../../types/Types';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineRobot } from "react-icons/ai"

function Services(){
    // List of services
    const services: CardProps[] = [
        {
            icon:faCog,
            title:'Process Automation',
            content:'Manual tasks slow teams and cause errors. Runwise automates workflows and approvals, freeing your team to focus on growth.'
        },

        {
            icon:AiOutlineRobot,
            title:'AI Agents',
            content:'Repetitive tasks waste time. Runwise AI handles routine responses and reminders, letting your team scale efficiently.'
        },
    ]
    
    return(
        <section className='flex flex-col py-10 gap-12'>
            <Badge 
                label='What We Offer'
            />
            <h2 className='text-center'>
                Our Core Services
            </h2>

            <section className='flex flex-col md:flex-row gap-6'>
                {
                    services.map(service => (
                    <Card 
                        icon={service.icon}
                        title={service.title}
                        content={service.content}
                    />
                ))
                }
            </section>
        </section>
    )
}

export default Services;