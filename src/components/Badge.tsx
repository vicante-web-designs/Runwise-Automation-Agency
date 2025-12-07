import type { BadgeProps } from '../../types/Types'

function Badge({ label }: BadgeProps){
    return(
        <div 
            className='py-2 px-4 rounded-full w-fit bg-blue-100 text-backgroundColor font-bold'
            role="status"
            aria-label={`Section: ${label}`}
        >
            <span className='text-[16px]'>
                {label}
            </span>
        </div>
    )
}

export default Badge;