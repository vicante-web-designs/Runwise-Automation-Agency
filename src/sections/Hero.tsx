import Button from '../components/Button';
import BackgroundCircles from '../components/BackgroundCircles';

function Hero(){
    return(
        <section className='flex flex-col items-center py-10 gap-6 md:gap-12 pageSection'>
            <BackgroundCircles
                position='top-20 right-10'
                />
                <BackgroundCircles
                position='bottom-20 left-10'
                />
            <h1 className='text-center'>
                Powered by<br />Automation
            </h1>
        
            <Button 
                destination='#'
                type='button'
                label='Get started'
            />
        </section>
    )
}

export default Hero;