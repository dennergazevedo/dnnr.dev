import Link from 'next/link';
import React from 'react';

const IconButton: React.FC<IconButton> = ({ Icon, link, background, color, size, name }: IconButton) => {
  return (
    <Link 
      href={link} 
      target='_blank' 
      style={
        background ? {
          background: background,
          color: color
        }: {}
      }
      aria-label={name}
      className={`flex ${size === 'small' ? 'p-2' : 'p-4'} linear-bg-white shadow-white rounded-md hover:-translate-y-1 transition-all`}
    >
      <Icon className={`${size === 'small' ? 'h-4 w-4' : 'h-6 w-6'}`}/>
    </Link>
  )
}

export default IconButton;