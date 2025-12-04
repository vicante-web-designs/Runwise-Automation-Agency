import type { BadgeProps } from '../../types/Types'

function Badge ({ label }: BadgeProps){
    return(
        <div className='py-2 px-3 rounded-full w-fit bg-[rgba(0,35,102,0.4)] border border-primaryColor'>
            <p className='text-[16px]'>
                {label}
            </p>
        </div>
    )
}

export default Badge;