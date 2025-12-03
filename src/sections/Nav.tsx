function Nav(){
    return (
        <nav className='bg-sectionBg text-textStrong'>
            <div className='flex items-center mx-auto w-fit gap-2 py-4'>
                <img
                 src="\Logo\Logo.png"
                 alt="Runwise logo"
                 className='w-15'
                 />
                <h3 className='tracking-tighter'>
                    RUNWISE
                </h3>
            </div>
        </nav>
    )
}

export default Nav;