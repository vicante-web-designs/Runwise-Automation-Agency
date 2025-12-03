function BackgroundCircles(){
    return(
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Circle 1 */}
            <div className="absolute top-20 left-40 w-[400px] h-[400px] rounded-full bg-[linear-gradient(0deg,#001031_0%,#00FFF2_100%)] blur-[300px] opacity-40"></div>

            {/* Circle 2 */}
            <div className="absolute bottom-32 right-24 w-[300px] h-[300px] rounded-full bg-[linear-gradient(0deg,#001031_0%,#00FFF2_100%)] blur-[300px] opacity-30"></div>

            {/* Circle 3 */}
            <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[linear-gradient(0deg,#001031_0%,#00FFF2_100%)] blur-[300px] opacity-20"></div>
        </div>
    )
}

export default BackgroundCircles;