import Badge from '../components/Badge';
import Card from '../components/Card';
import type { CardProps } from '../../types/Types';
import { faChartLine, faPuzzlePiece, faHandshake } from '@fortawesome/free-solid-svg-icons';

function WhyUs(){
    const whyUs: CardProps[] = [
        {
            icon: faChartLine,
            title: 'Results Over Tools',
            content: 'We don’t just provide software—we deliver measurable outcomes. Every feature is designed to save time, boost productivity, and increase revenue.'
        },
        {
            icon: faPuzzlePiece,
            title: 'Tailored for Your Business',
            content: 'Runwise adapts to your workflow, capturing leads, automating tasks, and streamlining operations—without extra setup or complexity.'
        },
        {
            icon: faHandshake,
            title: 'Trusted Automation Partner',
            content: 'We prioritize reliability, efficiency, and clarity—earning your trust, simplifying processes, and delivering results without unnecessary complexity.'
        },
    ]
    return(
        <section className='pageSection'>
            <Badge 
                label='Why Us?'
            />

            <h3 className='text-center'>
                Why Choose Runwise
            </h3>

            <section className='flex flex-col md:flex-row gap-6'>
                {
                    whyUs.map(service => (
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

export default WhyUs;