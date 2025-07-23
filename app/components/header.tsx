"use client"

import { Libre_Franklin } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  { name: "Performance", href: '/performance' },
  { name: "Reliability", href: '/reliability' },
  { name: "Scaled", href: '/scale' }
]

const accessLink = ['/', '/performance', '/reliability', '/scale']

export default function header() {
  const pathName = usePathname()

  return (
    <div className='absolute w-full z-10'>
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <nav className="text-xl space-x-4">
          {linkData.map((link) => <Link className={pathName === link.href ? 'text-purple-500' : ''} href={link.href}>{link.name}</Link>)}
        </nav>
      </div>
      </div>
    )
}
