import Button from '../components/Button';

function Hero(){
    return(
        <section className='flex flex-col items-center py-10 gap-6 md:gap-12 pageSection'>
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