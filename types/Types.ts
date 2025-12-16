import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { IconType } from 'react-icons/lib';

export interface BackgroundCirclesProp{
    position: string
}

export interface ButtonProps{
    label: string;
    type?: 'button' | 'submit' | 'reset';
    destination?: string;
    ariaLabel?: string;
    onClick?: () => Promise<void>
}

export interface BadgeProps{
    label: string;
}

export interface CardProps{
    icon: IconDefinition | IconType;
    title: string;
    content: string;
    ariaLabel?: string;
}

export interface ProcessCardProps{
    id: number;
    title: string;
    steps: string[];
}

export interface ToolType{
    name: string;
    imgSrc: string;
}

export interface Question{
    id: number;
    question: string;
    answer: string;
}

export interface ContactFormData{
    name: string;
    email: string;
    role: string;
    problem: string;
    message?: string;
}
