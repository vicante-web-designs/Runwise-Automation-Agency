import Badge from '../components/Badge';
import type { ToolType } from '../../types/Types';
import Marquee from 'react-fast-marquee';

function Tools(){
    const stack1: ToolType[] = [
        {
            name: 'N8N',
            imgSrc: '/Tools_Logo/n8n-color.svg'
        },
        {
            name: 'OpenAI',
            imgSrc: '/Tools_Logo/openai.png'
        },
        {
            name: 'Gemini',
            imgSrc: '/Tools_Logo/Google_Gemini_icon_2025.svg'
        },
        {
            name: 'Claude',
            imgSrc: '/Tools_Logo/Claude_AI_symbol.svg 1.svg'
        },
        {
            name: 'Google Sheets',
            imgSrc: '/Tools_Logo/Google_Sheets_Logo 1.svg'
        },
        {
            name: 'Google Drive',
            imgSrc: '/Tools_Logo/google-drive 1.svg'
        },
        {
            name: 'Gmail',
            imgSrc: '/Tools_Logo/Gmail_icon_(2020).svg'
        }
    ]

    const stack2: ToolType[] = [
        {
            name: 'Google Maps',
            imgSrc: '/Tools_Logo/Google_map.svg'
        },
        {
            name: 'Slack',
            imgSrc: '/Tools_Logo/slack 1.svg'
        },
        {
            name: 'Airtable',
            imgSrc: '/Tools_Logo/airtable 1.svg'
        },
        {
            name: 'Clickup',
            imgSrc: '/Tools_Logo/ClickUp_idfty-HNVU_0.svg'
        },
        {
            name: 'PostgresSQL',
            imgSrc: '/Tools_Logo/postgresql 1.svg'
        },
        {
            name: 'Eleven Labs',
            imgSrc: '/Tools_Logo/Eleven_labs.svg'
        },
        {
            name: 'Excel',
            imgSrc: '/Tools_Logo/excel 1.svg'
        },
        {
            name: 'Deepseek',
            imgSrc: '/Tools_Logo/deepseek-color.svg'
        }
    ]

    return(
        <section 
            id="tools"
            className='flex flex-col gap-[72px] my-10 pageSection'
            aria-labelledby="tools-heading"
        >
            <Badge 
                label='Our Stack'
            />

            <h2 id="tools-heading" className='text-center'>
                Tools We Use
            </h2>

            <div 
                className="space-y-0"
                role="region"
                aria-label="Technology stack showcase"
            >
                <Marquee
                    speed={30}
                    pauseOnHover
                    gradient={true}
                    gradientColor='rgba(8,17,34,60)'
                    gradientWidth={50}
                    autoFill
                    aria-label="First row of tools we integrate with"
                >
                    {
                        stack1.map((tool, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center mx-6'
                            >
                                <img
                                    src={tool.imgSrc}
                                    alt={`${tool.name} logo`}
                                    className='w-24 h-24'
                                    loading="lazy"
                                />
                                <p className="mt-2">
                                    {tool.name}
                                </p>
                            </div>
                        ))
                    }                    
                </Marquee>

                <Marquee
                    speed={30}
                    pauseOnHover
                    gradient={true}
                    gradientColor='rgba(8,17,34,60)'
                    gradientWidth={50}
                    direction='right'
                    autoFill
                    aria-label="Second row of tools we integrate with"
                >
                    {
                        stack2.map((tool, index) => (
                            <div 
                                key={index}
                                className='flex flex-col items-center mx-6 mt-8'
                            >
                                <img
                                    src={tool.imgSrc}
                                    alt={`${tool.name} logo`}
                                    className='w-24 h-24'
                                    loading="lazy"
                                />
                                <p className="mt-2">
                                    {tool.name}
                                </p>
                            </div>
                        ))
                    }
                </Marquee>
            </div>

            <p className='text-center text-xl font-semibold'>
                If you use it,<br />
                We can connect it.
            </p>
        </section>
    )
}

export default Tools;