import type { ButtonProps } from '../../types/Types'

function Button({ label, type, destination, ariaLabel, onClick }: ButtonProps){
    // If there's a destination, render as a link styled as a button
    if (destination) {
        return(
            <a 
                href={destination}
                className='primaryBtn sub-text text-textStrong inline-block'
                role="button"
                aria-label={ariaLabel || label}
            >
                {label}
            </a>
        )
    }

    // Otherwise render as a button
    return(
        <button 
            onClick={onClick}
            type={type || 'button'}
            className='primaryBtn sub-text text-textStrong'
            aria-label={ariaLabel || label}
        >
            {label}
        </button>
    )
}

export default Button;
