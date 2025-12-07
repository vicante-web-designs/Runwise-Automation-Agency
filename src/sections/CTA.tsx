import Button from '../components/Button';

function CTA(){
    return(
        <section 
            id="cta"
            className='flex flex-col items-center py-12 gap-6 md:gap-[72px] pageSection'
            aria-labelledby="cta-heading"
        >
            <h2 id="cta-heading" className='text-center'>
                Ready to Automate Your Business?
            </h2>

            <Button 
                label='Get started'
                type='button'
                destination='#contact'
                ariaLabel='Get started - Navigate to contact form'
            />
        </section>
    )
}

export default CTA;