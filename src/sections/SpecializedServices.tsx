import type { CardProps } from '../../types/Types';
import Badge from '../components/Badge';
import Card from '../components/Card';
import { faTasks, faFilter, faUsers, faCogs } from '@fortawesome/free-solid-svg-icons';

function SpecializedServices(){
    // List of services
   const specializedServices: CardProps[] = [
  {
    icon: faTasks,
    title: 'Project Management',
    content: 'Runwise keeps projects on track, reduces delays, and helps teams deliver faster.'
  },
  {
    icon: faFilter,
    title: 'Lead Generation',
    content: 'Runwise attracts and organizes new leads so your team can focus on closing deals.'
  },
  {
    icon: faUsers, // you can swap to any icon that fits sales
    title: 'Sales Administration',
    content: 'Runwise simplifies sales tasks, cuts down on busywork, and helps your team sell more.'
  },
  {
    icon: faCogs, // good fit for automation
    title: 'Custom Automations',
    content: 'Runwise builds tailored automations that save time and keep your business running smoothly.'
  },
];
    
    return(
        <section className='flex flex-col py-10 gap-12 pageSection'>
            <Badge 
                label='What We Specialize in'
            />
            <h2 className='text-center'>
                Our Speciality
            </h2>

            <section className='flex flex-col md:flex-row md:flex-wrap gap-6'>
                {
                    specializedServices.map(service => (
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

export default SpecializedServices;