import Button from '../components/Button';

function Hero(){
    return(
        <section 
            className='flex flex-col items-center py-10 gap-6 md:gap-12 pageSection'
            aria-labelledby="hero-heading"
        >
            <h1 id="hero-heading" className='text-center'>
                Powered by<br />Automation
            </h1>
        
            <Button 
                destination='#contact'
                type='button'
                label='Get started'
                aria-label="Get started with automation - Go to contact form"
            />
        </section>
    )
}

export default Hero;