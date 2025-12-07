function Logo(){
    return(
        <a 
            href="/" 
            className='flex items-center mx-auto w-fit gap-2 py-4'
            aria-label="Runwise home"
        >
            <img
                src="/Logo/Logo.png"
                alt=""
                className='w-15'
                aria-hidden="true"
            />
            <h3 className='tracking-tighter font-bold hover:text-primaryColor transition-colors duration-200 ease-in-out'>
                RUNWISE
            </h3>
        </a>
    )
}

export default Logo