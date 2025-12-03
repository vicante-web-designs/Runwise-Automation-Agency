import type { CardProps } from '../../types/Types';

function Card({ icon, title, content}: CardProps){
    return (
        <>
            <p>
                {icon}
                {title}
                {content}
            </p>
            
        </>
    )
}

export default Card;