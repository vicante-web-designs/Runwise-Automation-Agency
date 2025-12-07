import Badge from '../components/Badge';
import Button from '../components/Button';

function Contact(){
    return(
        <section id='contact' className='flex flex-col gap-10 pageSection' aria-labelledby="contact-heading">
            <Badge 
                label='Contact Us'
            />

            <article className='text-center mx-auto flex flex-col gap-4'>
                <h3 id="contact-heading" className='leading-10'>
                    Let's Make Your Business<br /> Run Smarter
                </h3>

                <p className='sub-text'>
                    Send a message<br />and we'll get back to you shortly.
                </p>
            </article>

            <form 
                action="https://formsubmit.co/runwiseagency@gmail.com" 
                method='POST' 
                className='flex flex-col gap-6 w-full max-w-2xl mx-auto'
                noValidate
                aria-label="Contact form"
            >
                <div className='flex flex-col *:flex *:flex-col gap-4'>
                    <label htmlFor="name">
                        <p className='font-bold flex gap-1'>
                            Name
                            <span className='text-primaryColor' aria-label="required">
                                *
                            </span>
                        </p>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g. JohnDoe Logistics"
                            required
                            aria-required="true"
                            autoComplete="name"
                        />
                    </label>

                    <label htmlFor="email">
                        <p className='font-bold flex gap-1'>
                            Email
                            <span className='text-primaryColor' aria-label="required">
                                *
                            </span>
                        </p>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="e.g. johndoe@yourbusiness.com"
                            required
                            aria-required="true"
                            autoComplete="email"
                        />
                    </label>

                    <label htmlFor="business-role">
                        <p className='font-bold flex gap-1'>
                            Business / Role
                            <span className='text-primaryColor' aria-label="required">
                                *
                            </span>
                        </p>
                        
                        <input
                            id="business-role"
                            name="business-role"
                            type="text"
                            placeholder="e.g. Operations Lead at JohnDoe Logistics Ltd"
                            required
                            aria-required="true"
                            autoComplete="organization-title"
                        />
                    </label>

                    <label htmlFor="problem">
                        <p className='font-bold flex gap-1'>
                            Please describe your problem
                            <span className='text-primaryColor' aria-label="required">
                                *
                            </span>
                        </p>
                        
                        <input
                            id="problem"
                            name="problem"
                            type="text"
                            placeholder="e.g. Too many repetitive tasks slowing down my team"
                            required
                            aria-required="true"
                        />
                    </label>

                    <label htmlFor="message">
                        <p className='font-bold'>
                            Message (Optional)
                        </p>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            cols={50}
                            className='px-4'
                            placeholder="Share extra context, goals, or automation ideas..."
                            aria-describedby="message-description"
                        />
                        <span id="message-description" className="sr-only">
                            Optional field for additional details about your automation needs
                        </span>
                    </label>
                </div>

                <div className='w-full flex justify-center'>
                    <Button 
                        type='submit'
                        label='Send message'
                    />
                </div>
            </form>
        </section>
    )
}

export default Contact;