import type { ButtonProps } from '../../types/Types'

function Button({ label, type }: ButtonProps){
    return(
        <button type={type} className=''>
            {label}
        </button>
    )
}

export default Button;