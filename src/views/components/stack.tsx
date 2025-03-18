'use client'

import React from 'react'
import clsx from 'clsx'

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column'
  spacing?: number
  wrap?: boolean
}

export function Stack({ children, spacing = 0, direction = 'column', wrap, className, ...props }: StackProps) {
  const spacingClass = spacing > 0 ? (direction === 'row' ? `gap-x-${spacing}` : `gap-y-${spacing}`) : ''

  return (
    <div {...props} className={clsx('flex', directionClass[direction], wrap && 'flex-wrap', spacingClass, className)}>
      {children}
    </div>
  )
}

const directionClass = {
  row: 'flex-row',
  column: 'flex-col',
}
