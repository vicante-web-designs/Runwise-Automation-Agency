import Badge from '../components/Badge';
import Button from '../components/Button';

function Contact(){
    return(
        <section className='flex flex-col gap-10 pageSection'>
            <Badge 
                label='Contact Us'
            />

            <article className='text-center mx-auto flex flex-col gap-4'>
                <h3 className='leading-10'>
                    Let's Make Your Business<br /> Run Smarter
                </h3>

                <p className='sub-text'>
                    Send a message<br />and we’ll get back to you shortly.
                </p>
            </article>

            <form action="" method='POST'  className='flex flex-col gap-6'>
                <div className='flex flex-col *:flex *:flex-col gap-4'>
                    <label>
                        <p className='font-bold flex gap-1'>
                            Name
                            <span className='text-primaryColor'>
                                *
                            </span>
                        </p>
                        <input
                        type="text"
                        placeholder="e.g. Victory Automation"
                        required
                        />
                    </label>

                    <label>
                        <p className='font-bold flex gap-1'>
                            Email
                            <span className='text-primaryColor'>
                                *
                            </span>
                        </p>
                        <input
                        type="text"
                        placeholder="e.g. johndoe@yourbusiness.com"
                        required
                        />
                    </label>

                    <label>
                        <p className='font-bold flex gap-1'>
                            Business / Role
                            <span className='text-primaryColor'>
                                *
                            </span>
                        </p>
                        
                        <input
                        type="text"
                        placeholder="e.g. Operations Lead at TechFlow Ltd"
                        required
                        />
                    </label>

                    <label>
                        <p className='font-bold flex gap-1'>
                            Please describe your problem
                            <span className='text-primaryColor'>
                                *
                            </span>
                        </p>
                        
                        <input
                        type="text"
                        placeholder="e.g. Too many repetitive approvals slowing down my team"
                        required
                        />
                    </label>

                    <label>
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
                        >
                        </textarea>
                    </label>
                </div>

                <Button 
                    type='submit'
                    label='Send message'
                />
            </form>
        </section>
    )
}

export default Contact;