import type { BackgroundCirclesProp } from '../../types/Types';

function BackgroundCircles({ position }: BackgroundCirclesProp){
    return(
        <div className={`fixed ${position} w-48 h-48 bg-linear-to-b from-[#001031] to-[#00fffb] rounded-full blur-[108px] pointer-events-none -z-10`}>
        
        </div>
    )
}

export default BackgroundCircles;