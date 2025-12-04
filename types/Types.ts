import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { IconType } from 'react-icons/lib';

export interface ButtonProps{
    label: string;
    type: 'button' | 'submit' | 'reset';
    destination: string;
}

export interface BadgeProps{
    label: string;
}

export interface CardProps{
    icon: IconDefinition | IconType;
    title: string;
    content: string;
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