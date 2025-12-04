import Logo from '../components/Logo';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SiLinkedin, SiInstagram } from "react-icons/si"

function Footer (){
    return (
        <footer>
            <Logo />

            <article>
                <p>
                    © 2025 Runwise. All rights reserved.
                </p>

                <p>
                    Trusted automation solutions for businesses that value time and results.
                </p>
            </article>

            <article>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon 
                        icon={faEnvelope}
                        className='text-primaryColor'
                    />
                    <a href=''>
                        info@runwiseai.co
                    </a>
                </div>

                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon 
                        icon={faLocationDot}
                        className='text-primaryColor'
                    />
                    <p>
                        Dublin, Ireland
                    </p>
                </div>
            </article>

            <Button 
                type='button'
                label='Get in touch'
            />

            <div className='flex *:text-2xl gap-4'>
                <SiLinkedin />
                <SiInstagram />
            </div>

        </footer>
    )
}

export default Footer;