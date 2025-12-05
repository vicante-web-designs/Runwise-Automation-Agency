import Button from '../components/Button';

function CTA(){
    return(
        <section className='flex flex-col items-center py-12 gap-6 md:gap-[72px] pageSection'>
            <h3 className='text-center'>
                Ready to Automate Your Business?
            </h3>

            <Button 
                label='Get started'
                type='button'
            />
        </section>
    )
}

export default CTA;