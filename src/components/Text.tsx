import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export type TextProps = {
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg',
    asChild?: boolean
}

export function Text({ children, size = 'md', asChild }: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp className={ 
            clsx('text-gray-100 font-sans', {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            }) 
        }>
            { children }
        </Comp>
    )
}