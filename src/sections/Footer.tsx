import Logo from '../components/Logo';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SiLinkedin, SiInstagram } from "react-icons/si"

function Footer(){
    return (
        <footer 
            className='pageSection flex flex-col gap-6 items-center my-10'
            role="contentinfo"
            aria-label="Site footer"
        >
            <Logo />

            <div className='pageSection flex flex-col items-center *:text-center gap-4'>
                <p>
                    © 2025 Runwise. All rights reserved.
                </p>

                <p>
                    Trusted automation solutions for businesses that value time and results.
                </p>
            </div>

            <address className='not-italic' aria-label="Contact information">
                <div className='flex gap-2 items-center mb-2'>
                    <FontAwesomeIcon 
                        icon={faEnvelope}
                        className='text-primaryColor'
                        aria-hidden="true"
                    />
                    <a 
                        href='mailto:info@runwiseai.co'
                        className='hover:underline'
                        aria-label="Email us at info@runwiseai.co"
                    >
                        info@runwiseai.co
                    </a>
                </div>

                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon 
                        icon={faLocationDot}
                        className='text-primaryColor'
                        aria-hidden="true"
                    />
                    <p>
                        Dublin, Ireland
                    </p>
                </div>
            </address>

            <Button 
                type='button'
                label='Get in touch'
                destination='#contact'
                ariaLabel='Get in touch - Navigate to contact form'
            />

            <nav aria-label="Social media links">
                <ul className='flex *:text-2xl gap-4 list-none'>
                    <li>
                        <a 
                            href="https://www.linkedin.com/company/runwise-ai-agency/"
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label="Visit our LinkedIn page (opens in new tab)"
                        >
                            <SiLinkedin aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.instagram.com/runwiseai/"
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label="Visit our Instagram page (opens in new tab)"
                        >
                            <SiInstagram aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;