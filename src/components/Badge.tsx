import type { BadgeProps } from '../../types/Types'

function Badge ({ label }: BadgeProps){
    return(
        <div>
            {label}
        </div>
    )
}

export default Badge;