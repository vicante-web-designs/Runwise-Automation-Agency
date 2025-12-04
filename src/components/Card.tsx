import type { CardProps } from '../../types/Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ icon, title, content }: CardProps){
    // Function to check if icon is fontAwesome
    const isFontAwesome = typeof icon === 'object' && 'iconName' in icon;

    // Treat react icon as a variable, so it renders properly
    const IconComponent = icon as React.ElementType;

    return (
        <article className='flex flex-col p-6 gap-6 bg-[rgba(102,123,163,0.2)] rounded-xl w-fit mx-auto'>
            <div className='flex flex-col gap-2'>
                <div className='p-4 w-14 h-14 rounded-full bg-[rgba(0,35,102,0.4)] border border-primaryColor flex items-center'>
                    {
                        isFontAwesome ? (<FontAwesomeIcon icon={icon} size='lg' />) : <IconComponent className='text-2xl' />
                    }
                </div>

                <h4>
                    {title}
                </h4>
            </div>

            <p className="sub-text max-w-[330px]">
                {content}
            </p>
        </article>
    )
}

export default Card;