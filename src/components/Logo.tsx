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
            <span className='tracking-tighter text-2xl font-bold'>
                RUNWISE
            </span>
        </a>
    )
}

export default Logo