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
        <section>
            <Badge 
                label='What We Offer'
            />
            <h2>
                Our Core Services
            </h2>

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
    )
}

export default Services;