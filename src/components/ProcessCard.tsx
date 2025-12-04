import type { ProcessCardProps } from '../../types/Types';

function ProcessCard({ id, title, steps}: ProcessCardProps){
    return (
        <article className='flex flex-col p-6 gap-6 bg-[rgba(102,123,163,0.2)] rounded-xl w-fit mx-auto items-center relative'>
            
            <span className='w-14 h-14 rounded-full bg-[rgba(0,35,102,0.4)] border border-textStrong flex items-center justify-center text-2xl font-bold absolute -top-7'>      
                        {id}
            </span>

            <h4>
                {title}
            </h4>

            <article className='flex flex-col gap-4'>
                {
                    steps.map(step => (
                        <div className='flex gap-4'>
                            <div className='w-4 h-4 bg-primaryColor rounded-full'></div>
                            
                            <p className='text-textWeak max-w-[250px]'>
                                {step}
                            </p>
                        </div>
                    ))
                }
            </article>
        </article>
    )
}

export default ProcessCard;