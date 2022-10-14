import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export type HeadingProps = {
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg',
    asChild?: boolean
}

export function Heading({ children, size = 'md', asChild }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp className={ 
            clsx('text-gray-100 font-bold font-sans', {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
            }) 
        }>
            { children }
        </Comp>
    )
}