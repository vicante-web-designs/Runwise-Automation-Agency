import type { BackgroundCirclesProp } from '../../types/Types';

function BackgroundCircles({ position }: BackgroundCirclesProp){
    return(
        <div className={`fixed ${position} w-24 h-24 sm:w-36 sm:h-36 bg-linear-to-b from-[#001031] to-[#00fffb] rounded-full blur-2xl sm:blur-3xl pointer-events-none -z-10`}>
        
        </div>
    )
}

export default BackgroundCircles;