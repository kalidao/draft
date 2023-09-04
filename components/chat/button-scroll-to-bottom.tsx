'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { useAtBottom } from '@/hooks/use-at-bottom'
import { Button, type ButtonProps } from '@/components/ui/button'
import { ArrowDownIcon } from 'lucide-react'

export function ButtonScrollToBottom({ className, ...props }: ButtonProps) {
  const isAtBottom = useAtBottom()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        'sticky z-10 bg-background transition-opacity duration-300 right-0 left-full mr-2',
        isAtBottom ? 'opacity-0' : 'opacity-100',
        className
      )}
      
      onClick={() =>
        window.scrollTo({
          top: document.body.offsetHeight,
          behavior: 'smooth'
        })
      }
      {...props}
    >
      <ArrowDownIcon />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  )
}
