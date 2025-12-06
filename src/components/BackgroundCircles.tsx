function BackgroundCircles({ position }){
    return(
        <div className={`absolute ${position} w-64 h-64 bg-linear-to-b from-[#001031] to-[#00FFF2] rounded-full blur-[128px] pointer-events-none -z-10`}>
        
        </div>
    )
}

export default BackgroundCircles;