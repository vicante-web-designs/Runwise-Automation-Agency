import type { CardProps } from '../../types/Types';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { faTasks, faFilter, faUsers, faCogs } from '@fortawesome/free-solid-svg-icons';

function SpecializedServices(){
    const specializedServices: CardProps[] = [
      {
        icon: faTasks,
        title: 'Project Management',
        content: 'Runwise keeps projects on track, reduces delays, and helps teams deliver faster.',
        ariaLabel: 'Project Management specialization'
      },
      {
        icon: faFilter,
        title: 'Lead Generation',
        content: 'Runwise attracts and organizes new leads so your team can focus on closing deals.',
        ariaLabel: 'Lead Generation specialization'
      },
      {
        icon: faUsers,
        title: 'Sales Administration',
        content: 'Runwise simplifies sales tasks, cuts down on busywork, and helps your team sell more.',
        ariaLabel: 'Sales Administration specialization'
      },
      {
        icon: faCogs,
        title: 'Custom Automations',
        content: 'Runwise builds tailored automations that save time and keep your business running smoothly.',
        ariaLabel: 'Custom Automations specialization'
      },
    ];
    
    return(
        <section 
            id="specialized-services"
            className='flex flex-col py-10 gap-12 pageSection'
            aria-labelledby="specialized-services-heading"
        >
            <Badge 
                label='What We Specialize in'
            />
            <h2 id="specialized-services-heading" className='text-center'>
                Our Speciality
            </h2>

            <div 
                className='flex flex-col md:flex-row md:flex-wrap gap-6 justify-center'
                role="list"
                aria-label="Our specializations"
            >
                {
                    specializedServices.map((service, index) => (
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

export default SpecializedServices;