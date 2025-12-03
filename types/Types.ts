export interface ButtonProps{
    label: string;
    type: 'button' | 'submit' | 'reset'
}

export interface BadgeProps{
    label: string;
}

export interface CardProps{
    icon: string;
    title: string;
    content: string;
}

export interface ProcessCardProps{
    title: string;
    steps: string[];
}