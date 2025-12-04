import Badge from '../components/Badge';
import type { ToolType } from '../../types/Types';

function Tools(){
    const stack1: ToolType[] = [
        {
            name: 'N8N',
            imgSrc: '/Tools_Logo/n8n-color.svg'
        },
        {
            name: 'OpenAI',
            imgSrc: '/Tools_Logo/openai-svgrepo-com.svg'
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
            imgSrc: '/Tools_Logo/gmail 1.svg'
        }
    ]

    const stack2: ToolType[] = [
        {
            name: 'Google Maps',
            imgSrc: '/Tools_Logo/google-maps-platform 1.svg'
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
            imgSrc: '/Tools_Logo/elevenlabs 1.svg'
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
        <section>
            <Badge 
                label='Our Stack'
            />

            <h3 className='text-center'>
                Tools We Use
            </h3>

            <section>
                <div className='flex justify-between gap-[]'>
                    {
                        stack1.map(tool => (
                            <div className='flex flex-col'>
                                <img
                                    src={tool.imgSrc}
                                    alt={`${tool.name} Logo`}
                                    className='w-24'
                                />
                                <p>
                                    {tool.name}
                                </p>
                            </div>
                        ))
                    }
                </div>

                <div className='flex justify-between gap-[]'>
                    {
                        stack2.map(tool => (
                            <div className='flex flex-col'>
                                <img
                                    src={tool.imgSrc}
                                    alt={`${tool.name} Logo`}
                                    className='w-24'
                                />
                                <p>
                                    {tool.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <h4 className='text-center'>
                If you use it, <br />
                We can connect it.
            </h4>
        </section>
    )
}

export default Tools;