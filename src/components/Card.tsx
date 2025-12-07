import type { CardProps } from '../../types/Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ icon, title, content, ariaLabel }: CardProps){
    // Function to check if icon is fontAwesome
    const isFontAwesome = typeof icon === 'object' && 'iconName' in icon;

    // Treat react icon as a variable, so it renders properly
    const IconComponent = icon as React.ElementType;

    // Generate a unique ID for aria-describedby
    const contentId = `card-content-${title.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <article 
            className='flex flex-col p-4 sm:p-6 gap-4 sm:gap-6 bg-[rgba(102,123,163,0.2)] rounded-xl w-full sm:w-[330px] mx-auto'
            aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
            aria-describedby={contentId}
            aria-label={ariaLabel}
        >
            <div className='flex flex-col gap-2'>
                <div 
                    className='p-4 w-14 h-14 rounded-full bg-[rgba(0,35,102,0.4)] border border-primaryColor flex items-center justify-center'
                    aria-hidden="true"
                    role="presentation"
                >
                    {
                        isFontAwesome ? (
                            <FontAwesomeIcon 
                                icon={icon} 
                                size='lg'
                                aria-hidden="true"
                            />
                        ) : (
                            <IconComponent 
                                className='text-2xl'
                                aria-hidden="true"
                            />
                        )
                    }
                </div>

                <h3 
                    id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
                    className='min-h-14'
                >
                    {title}
                </h3>
            </div>

            <p 
                id={contentId}
                className="sub-text"
            >
                {content}
            </p>
        </article>
    )
}

export default Card;