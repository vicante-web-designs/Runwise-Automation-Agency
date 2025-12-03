import type { ProcessCardProps } from '../../types/Types';

function ProcessCard({ title, steps}: ProcessCardProps){
    return (
        <>
            <p>
                {title}
                {steps}
            </p>
        </>
    )
}

export default ProcessCard;