import Logo from '../components/Logo';

function Nav(){
    return (
        <nav 
            className='bg-sectionBg text-textStrong'
            role="navigation"
            aria-label="Main navigation"
        >
            <Logo />
        </nav>
    )
}

export default Nav;