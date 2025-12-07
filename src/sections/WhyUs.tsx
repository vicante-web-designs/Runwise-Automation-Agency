import Badge from '../components/Badge';
import Card from '../components/Card';
import type { CardProps } from '../../types/Types';
import { faChartLine, faPuzzlePiece, faHandshake } from '@fortawesome/free-solid-svg-icons';

function WhyUs(){
    const whyUs: CardProps[] = [
        {
            icon: faChartLine,
            title: 'Results Over Tools',
            content: "We don't just provide software, we deliver measurable outcomes. Every feature is designed to save time, boost productivity, and increase revenue.",
            ariaLabel: 'Results Over Tools - Our focus on measurable outcomes'
        },
        {
            icon: faPuzzlePiece,
            title: 'Tailored for Your Business',
            content: 'Runwise adapts to your workflow, capturing leads, automating tasks, and streamlining operations, without extra setup or complexity.',
            ariaLabel: 'Tailored for Your Business - Customized automation solutions'
        },
        {
            icon: faHandshake,
            title: 'Trusted Automation Partner',
            content: 'We prioritize reliability, efficiency, and clarity, earning your trust, simplifying processes, and delivering results without unnecessary complexity.',
            ariaLabel: 'Trusted Automation Partner - Reliable and efficient service'
        },
    ]

    return(
        <section 
            id="why-us"
            className='pageSection flex flex-col gap-10'
            aria-labelledby="why-us-heading"
        >
            <Badge 
                label='Why Us?'
            />

            <h2 id="why-us-heading" className='text-center'>
                Why Choose Runwise
            </h2>

            <div 
                className='flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto'
                role="list"
                aria-label="Reasons to choose Runwise"
            >
                {
                    whyUs.map((service, index) => (
                        <div key={index} role="listitem">
                            <Card 
                                icon={service.icon}
                                title={service.title}
                                content={service.content}
                                ariaLabel={service.ariaLabel}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WhyUs;