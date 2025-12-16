import Badge from '../components/Badge';
import Button from '../components/Button';
import { useState } from 'react';
import type { ContactFormData } from '../../types/Types';

const webhook_URL = 'https://ayissf.app.n8n.cloud/webhook/b50e57fb-e3a7-474c-9714-83026605e2d3'

function Contact(){
    const [contactFormData, setContactFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        role: '',
        problem: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setContactFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(): Promise<void> {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(webhook_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: contactFormData.name,
                    email: contactFormData.email,
                    businessRole: contactFormData.role,
                    problem: contactFormData.problem,
                    message: contactFormData.message || ''
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setContactFormData({
                    name: '',
                    email: '',
                    role: '',
                    problem: '',
                    message: '',
                });
            } else {
                console.error('Response not ok:', response.status, response.statusText);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

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

            <div className='flex flex-col gap-6 w-full max-w-2xl mx-auto'>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="name" className='flex flex-col'>
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
                            value={contactFormData.name}
                            onChange={handleChange}
                            placeholder="e.g. JohnDoe Logistics"
                            required
                            aria-required="true"
                            autoComplete="name"
                        />
                    </label>

                    <label htmlFor="email" className='flex flex-col'>
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
                            value={contactFormData.email}
                            onChange={handleChange}
                            placeholder="e.g. johndoe@yourbusiness.com"
                            required
                            aria-required="true"
                            autoComplete="email"
                        />
                    </label>

                    <label htmlFor="role" className='flex flex-col'>
                        <p className='font-bold flex gap-1'>
                            Business / Role
                            <span className='text-primaryColor' aria-label="required">
                                *
                            </span>
                        </p>
                        
                        <input
                            id="role"
                            name="role"
                            type="text"
                            value={contactFormData.role}
                            onChange={handleChange}
                            placeholder="e.g. Operations Lead at JohnDoe Logistics Ltd"
                            required
                            aria-required="true"
                            autoComplete="organization-title"
                        />
                    </label>

                    <label htmlFor="problem" className='flex flex-col'>
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
                            value={contactFormData.problem}
                            onChange={handleChange}
                            placeholder="e.g. Too many repetitive tasks slowing down my team"
                            required
                            aria-required="true"
                        />
                    </label>

                    <label htmlFor="message" className='flex flex-col'>
                        <p className='font-bold'>
                            Message <span className="text-textWeak text-[14px]">(optional)</span>
                        </p>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            cols={50}
                            className='px-4'
                            value={contactFormData.message}
                            onChange={handleChange}
                            placeholder="Share extra context, goals, or automation ideas..."
                            aria-describedby="message-description"
                        />
                        <span id="message-description" className="sr-only">
                            Optional field for additional details about your automation needs
                        </span>
                    </label>
                </div>

                {submitStatus === 'success' && (
                    <div className='p-4 bg-green-100 border border-green-400 text-green-700 rounded'>
                        ✓ Message sent successfully! We'll get back to you soon.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className='p-4 bg-red-100 border border-red-400 text-red-700 rounded'>
                        ✗ Something went wrong. Please try again.
                    </div>
                )}

                <div className='w-full flex justify-center'>
                    <Button 
                        type='button'
                        label={isSubmitting ? 'Sending...' : 'Send message'}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact;
